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
    let isPasswordMatch = false;
    // Check if the password matches as a plain text password
    if (user.password === password) {
      isPasswordMatch = true;
      // Hash the plain text password and update the user document
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
      await user.save();
      console.log("Password was plain text and is now hashed");
    } else {
      // If the password is not plain text, compare it using bcrypt
      isPasswordMatch = await bcrypt.compare(password, user.password);
    }

    const response = NextResponse.json(user, { status: 200 });
    return response;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return NextResponse.json(
      { message: "Error connecting to MongoDB", error },
      { status: 500 },
    );
  }
}
