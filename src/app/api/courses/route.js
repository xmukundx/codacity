import data from "@/utillity/data";
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
        // Check if the data is already in the database
        const courses = await Course.find({});

        if (courses.length === 0) {
            // If the database is empty, seed it with the initial data
            await Course.insertMany(data);
            console.log('Database seeded successfully');
        } else {
            console.log('Database already contains data');
        }

        // calling the data 
        const allCourses = await Course.find({});
        return NextResponse.json(allCourses, { status: 200 });


    } catch (error) {
        console.log('Could not connect', error);
        return NextResponse.json({ message: 'Error connecting to database' }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 })


}