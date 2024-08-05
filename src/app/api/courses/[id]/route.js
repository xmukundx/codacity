import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Course from "../../../../../lib/models/course";

export async function GET(req, {params}) {

    try {
        // connecting with mongo
        if (!mongoose.connections[0].readyState) {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log('Successfully connected to MongoDB');
        }
        const allCourses = await Course.find({});

        // filtering to get the selected course
        const courseId = allCourses.filter((item)=> item.id === params.id) 
       
        
        
        return NextResponse.json(courseId.length === 0? {result:'no data', success:false}:{result:courseId[0], success:true})

    } catch (error) {
        console.log('Could not connect', error);
        return NextResponse.json({ message: 'Error connecting to database' }, { status: 500 });
    }


}