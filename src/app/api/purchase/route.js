import User from '../../../../lib/models/user';
import mongoose from 'mongoose';
import Course from '../../../../lib/models/course';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Successfully connected to MongoDB");
    }

    const { email, _id } = await req.json();
        const user = await User.findOne({email});
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Check if the course exists
    const course = await Course.findById({_id});
    if (!course) {
      return NextResponse.json({ message: "Course not found" }, { status: 404 });
    }

    // Add courseId to user's purchasedCourses if not already added
    if (!user.purchasedCourses.includes(_id)) {
      user.purchasedCourses.push(_id);
      await user.save();
    }
    
    

    return NextResponse.json({ message: "Course purchased successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error purchasing course:", error);
    return NextResponse.json(
      { message: "Error purchasing course", error: error.message },
      { status: 500 }
    );
  }
}
