// app/api/doctors/route.ts
import { NextResponse } from 'next/server';
import connectMongoDB from "@/libs/mogodb";
import Doctor from '@/models/doctor'; // Your Doctor mongoose model


export async function GET() {
  try {
    await connectMongoDB();

    const doctors = await Doctor.find();
    return NextResponse.json(doctors);
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