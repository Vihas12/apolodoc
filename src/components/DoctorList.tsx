'use client';

import { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';
import { FaChevronRight } from "react-icons/fa";
import { PiSliders } from "react-icons/pi";
import SortDropdown from './SortDropdown';

export interface Doctor {
  photoUrl: string;
  name: string;
  specialty: string;
  yearsExperience: string;
  qualifications: string;
  location: string;
  clinic: string;
  rating: number;
  ratingCount: string;
  onlineFee: number;
  visitFee: number;
}

export default function DoctorList() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch('/api/doctors');
        const data = await res.json();
        setDoctors(data);
      } catch (err) {
        console.error('Error fetching doctors:', err);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="flex-1 space-y-4 mt-3 h-175 lg:pl-12">
      <div className='flex items-center text-xs text-cyan-800'>
        <a href="#">Home</a><FaChevronRight className='text-black mx-1' size={10}/>
        <a href="#">Doctors</a><FaChevronRight className='text-black mx-1' size={10}/>
        <a href="#" className='text-black'>General Physicians</a>
      </div>

      <div className='flex flex-col-reverse gap-2 lg:mt-7.5 lg:flex-row lg:items-center lg:justify-between'>
        <h2 className="text-2xl font-bold">Consult General Physicians Online - Internal Medicine Specialists<br/><p className='text-base font-light'>({doctors.length} doctors)</p></h2>
        <div className='flex items-center gap-2'>
          <SortDropdown onSortChange={(option) => console.log('Sort by:', option)} />
          <button className="h-10 w-25 px-4 py-2 border border-gray-300 rounded-md bg-white cursor-pointer lg:hidden">
            <div className='flex items-center gap-1'>
              <PiSliders size={20} /><span className="text-sm font-semibold">Filters</span>
            </div>
          </button>
        </div>
      </div>

      <div className='overflow-y-scroll space-y-3 h-250 lg:h-130'>
      {doctors.map((doctor, index) => (
        <DoctorCard key={index} {...doctor} />
      ))}
      </div>
      
    </div>
  );
}
