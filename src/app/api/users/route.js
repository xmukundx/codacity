import mongoose from "mongoose";
import User from "../../../../lib/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // connecting with mongo
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Successfully connected to MongoDB");
    }
    console.log("Successfully connected to MongoDB");

    const { firstName, lastName, email, password } = await req.json();

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });

    await newUser.save();
    return NextResponse.json(newUser, { status: 201 });


  } catch (error) {
    console.error('Error saving user:', error);
    return NextResponse.json({ message: 'Error saving user', error }, { status: 500 });
  }
}
