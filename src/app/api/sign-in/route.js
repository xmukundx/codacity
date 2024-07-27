import mongoose from "mongoose";
import Student from "../../../../lib/models/students";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Successfully connected to MongoDB");
    }

    const { email, password } = await req.json();
    const student = await Student.findOne({ email });

    if (!student) {
      return NextResponse.json({ message: "User not found" }, { status: 401 });
    }
    let isPasswordMatch = false;
    // Check if the password matches as a plain text password
    if (student.password === password) {
      isPasswordMatch = true;
      // Hash the plain text password and update the user document
      const hashedPassword = await bcrypt.hash(password, 10);
      student.password = hashedPassword;
      await student.save();
      console.log("Password was plain text and is now hashed");
    } else {
      // If the password is not plain text, compare it using bcrypt
      isPasswordMatch = await bcrypt.compare(password, student.password);
    }

    const response = NextResponse.json(student, { status: 200 });
    return response;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return NextResponse.json(
      { message: "Error connecting to MongoDB", error },
      { status: 500 },
    );
  }
}
