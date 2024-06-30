import data from "@/utillity/data";
import { NextResponse } from "next/server";


function GET(res, req) {
    return NextResponse.json(data, {status: 200})

}