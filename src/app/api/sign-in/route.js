import mongoose from "mongoose";
import User from "../../../../lib/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Successfully connected to MongoDB");
    }

    const { email, password } = await req.json();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 401 });
    }

    // comparing password with bcrypt
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return NextResponse.json(
      { message: "Error connecting to MongoDB", error },
      { status: 500 }
    );
  }
}
