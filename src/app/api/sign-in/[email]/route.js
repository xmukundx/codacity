import mongoose from "mongoose";
import User from "../../../../../lib/models/user";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Successfully connected to MongoDB");
    }

    const { email } = params; // Extract the email from the URL parameters

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching user details:", error);
    return NextResponse.json(
      { message: "Error fetching user details", error: error.message },
      { status: 500 },
    );
  }
}
