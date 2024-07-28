import mongoose from "mongoose";
import Student from "../../../../lib/models/students";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    // Connect to MongoDB if not already connected
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Successfully connected to MongoDB");
    }

    const { firstName, lastName, email, password } = await req.json();
    // Check if user exists
    const existingStudent = await Student.findOne({ email });

    if (existingStudent) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }
    

    const hashPassword = await bcrypt.hash(password, 10);

    const newStudent = new Student({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });

    await newStudent.save();
    return NextResponse.json(newStudent, { status: 201 });
  } catch (error) {
    console.error("Error saving student:", error);
    return NextResponse.json(
      { message: "Error saving student", error },
      { status: 500 },
    );
  }
}
