import DoctorCard from './DoctorCard';
import { FaChevronRight } from "react-icons/fa";
import SortDropdown from './SortDropdown';

const doctors = [
  {
    name: 'Dr. Kiran Macha',
    specialty: 'General Physician / Internal Medicine Specialist',
    yearsExperience: '21 YEARS',
    qualifications: 'MBBS, MD GENERAL MEDICINE',
    location: 'HYDERABAD',
    clinic: 'Sri Clinic, HYDERABAD',
    rating: 85,
    ratingCount: '100+ Patients',
    onlineFee: 750,
    visitFee: 800,
  },
  {
    name: 'Dr. Aravinthan R',
    specialty: 'General Physician / Internal Medicine Specialist',
    yearsExperience: '6 YEARS',
    qualifications: 'MBBS, DNB GENERAL MEDICINE',
    location: 'Coimbatore',
    clinic: 'Medcare Clinics, Coimbatore',
    rating: 90,
    ratingCount: '200+ Patients',
    onlineFee: 200,
    visitFee: 300,
  },
  {
    name: 'Dr. Liritha C',
    specialty: 'General Physician / Internal Medicine Specialist',
    yearsExperience: '5 YEARS',
    qualifications: 'MBBS, MD (GENERAL MEDICINE)',
    location: 'Hyderabad',
    clinic: 'Apollo 24|7 Virtual Clinic',
    rating: 95,
    ratingCount: '300+ Patients',
    onlineFee: 429,
    visitFee: 500,
  },
];

export default function DoctorList() {
  return (
    <div className="flex-1 space-y-4 mt-3 h-175 lg:pl-12">
      <div className='flex items-center text-xs text-cyan-800'>
        <a href="#">Home</a><FaChevronRight className='text-black mx-1' size={10}/>
        <a href="#">Doctors</a><FaChevronRight className='text-black mx-1' size={10}/>
        <a href="#" className='text-black'>General Physicians</a>
      </div>
      <div className='flex items-center justify-between lg:mt-7.5'>
      <h2 className="text-2xl font-bold">Consult General Physicians Online - Internal Medicine Specialists<br/><p className='text-base font-light'>(762 doctors)</p></h2>
      <SortDropdown  onSortChange={(option) => console.log('Sort by:', option)} />
      </div>
      {doctors.map((doctor, index) => (
        <DoctorCard key={index} {...doctor} />
      ))}
    </div>
  );
}
