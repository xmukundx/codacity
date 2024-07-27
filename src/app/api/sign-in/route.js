import mongoose from "mongoose";
import Student from "../../../../lib/models/students";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export async function POST(req) {
  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Successfully connected to MongoDB");
    }

    const { email, password } = await req.json();

    
    const student = await Student.findOne({ email });

    if (!student) {
      return NextResponse.json({ message: "User not found" }, { status: 401 });
    }

    const isPasswordMatch = await bcrypt.compare(password, student.password);

    if (isPasswordMatch) {
      const { _id, email, firstName, ...otherData } = student.toObject(); // Destructuring keys from the student obj
      console.log(firstName, email);
      const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60, // active for 1 hour
        path: '/',
      };

      const cookie = `username=${student.firstName}; HttpOnly; Max-Age=${cookieOptions.maxAge}; Path=${cookieOptions.path}; ${
        cookieOptions.secure ? 'Secure;' : ''
      }`;

      const response = NextResponse.json(student, { status: 200 });
      response.headers.append('Set-Cookie', cookie);
      return response;
    } else {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return NextResponse.json(
      { message: "Error connecting to MongoDB", error },
      { status: 500 }
    );
  }
}
