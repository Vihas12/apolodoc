"use client";
// Example: app/doctors/new/page.tsx (App Router)
import DoctorForm from '@/components/DoctorForm'; // Adjust path based on your folder structure

export default function CreateDoctorPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add a New Doctor</h1>
      <DoctorForm />
    </div>
  );
}
