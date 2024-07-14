import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Course from "../../../../../lib/models/course";

export async function GET({req, params}) {

    try {
        console.log("Received params:", params);
        // connecting with mongo
        if (!mongoose.connections[0].readyState) {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log('Successfully connected to MongoDB');
        }
        const courseId = params?.id; 
        // console.log(courseId);
        
        const allCourses = await Course.find({});
        
        return NextResponse.json(allCourses, { status: 200 });

    } catch (error) {
        console.log('Could not connect', error);
        return NextResponse.json({ message: 'Error connecting to database' }, { status: 500 });
    }


}