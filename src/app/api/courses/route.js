import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Course from "../../../../lib/models/course";

export async function GET() {

    try {
        // connecting with mongo
        if (!mongoose.connections[0].readyState) {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log('Successfully connected to MongoDB');
          }
        // Calling data from the database
        const courses = await Course.find({});

        return NextResponse.json(courses, { status: 200 });


    } catch (error) {
        console.log('Could not connect', error);
        return NextResponse.json({ message: 'Error connecting to database' }, { status: 500 });
    }


}