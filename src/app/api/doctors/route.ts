// app/api/doctors/route.ts
import { NextResponse } from 'next/server';
import connectMongoDB from "@/libs/mogodb";
import Doctor from '@/models/doctor'; // Your Doctor mongoose model



export async function GET(request: Request) {
  try {
    await connectMongoDB();

    // Get page and limit from query params, with defaults
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const limit = parseInt(url.searchParams.get('limit') || '10', 10);

    // Skip calculation for pagination
    const skip = (page - 1) * limit;

    const doctors = await Doctor.find()
      .skip(skip)
      .limit(limit);

    // Get the total count of doctors for pagination info
    const totalDoctors = await Doctor.countDocuments();

    return NextResponse.json({
      doctors,
      totalPages: Math.ceil(totalDoctors / limit), // Calculate total pages
      currentPage: page,
      totalDoctors,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch doctors' }, { status: 500 });
  }
}

export async function POST(req: Request) {
    try {
      await connectMongoDB();

      const data = await req.json();

      const doctor = await Doctor.create(data);
      return NextResponse.json(doctor, { status: 201 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: 'Failed to create doctor' }, { status: 500 });
    }
  }