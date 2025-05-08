'use client';

import { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';
import { FaChevronRight } from "react-icons/fa";
import { PiSliders } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import SortDropdown from './SortDropdown';
import FilterLeftSlide from './FilterLeftSlide';
import axios from 'axios';

export interface Doctor {
  photoUrl: string;
  name: string;
  specialty: string;
  yearsExperience: string;
  qualifications: string;
  location: string;
  language: string[];
  clinic: string;
  rating: number;
  ratingCount: string;
  onlineFee: number;
  visitFee: number;
}

interface Filters {
  experience: string[];
  feeRange: string[];
  clinic: string[];
  language: string[];
  hospitalVisit: boolean;
  onlineConsult: boolean;
}

export default function DoctorList({ filters }: { filters: Filters }) {
  const [allDoctors, setAllDoctors] = useState<Doctor[]>([]);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const limit = 10; // Number of doctors per page

  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [filter, setFilters] = useState<Filters>({
    hospitalVisit: true,
    onlineConsult: true,
    experience: [],
    feeRange: [],
    language: [],
    clinic: [],
  });
  // Fetch doctors data from the API
  const fetchDoctors = async (page: number) => {
    try {
      setLoading(true);
      const res = await axios.get('/api/doctors', {
        params: {
          page,
          limit,
        },
      });
      const data = res.data.doctors;
      setDoctors(data);
      setAllDoctors(data); // Store all fetched doctors
      setTotalPages(res.data.totalPages);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching doctors:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDoctors(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const applyFilters = () => {
      const result = allDoctors.filter((doc) => {
        const experience = parseInt(doc.yearsExperience);
        const matchesExperience =
          filters.experience.length === 0 ||
          filters.experience.some((range) => {
            if (range === "0-5") return experience <= 5;
            if (range === "6-10") return experience >= 6 && experience <= 10;
            if (range === "11-16") return experience >= 11 && experience <= 16;
            if (range === "16+") return experience > 16;
          });

        const matchesFee =
          filters.feeRange.length === 0 ||
          filters.feeRange.some((range) => {
            if (range === "100-500") return doc.visitFee >= 100 && doc.visitFee <= 500;
            if (range === "500-1000") return doc.visitFee > 500 && doc.visitFee <= 1000;
            if (range === "1000+") return doc.visitFee > 1000;
          });

        const matchesClinic =
          filters.clinic.length === 0 || filters.clinic.includes(doc.clinic);

        const matchesLanguage =
          filters.language.length === 0 ||
          filters.language.some((lang) => doc.language.includes(lang));

        const matchesMode =
          (filters.hospitalVisit && doc.visitFee > 0) ||
          (filters.onlineConsult && doc.onlineFee > 0);

        return matchesExperience && matchesFee && matchesClinic && matchesLanguage && matchesMode;
      });

      setFilteredDoctors(result);
    };

    if (allDoctors.length > 0) {
      applyFilters();
    }
  }, [filters, allDoctors]); // Reapply filters when they change

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex-1 space-y-4 mt-3 h-175 lg:pl-12">
      <div className='flex items-center text-xs text-cyan-800'>
        <a href="#">Home</a><FaChevronRight className='text-black mx-1' size={10} />
        <a href="#">Doctors</a><FaChevronRight className='text-black mx-1' size={10} />
        <a href="#" className='text-black'>General Physicians</a>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:mt-8">
        {/* Heading */}
        <div>
          <h2 className="text-2xl font-bold leading-tight">
            Consult General Physicians Online - Internal Medicine Specialists
          </h2>
          <p className="text-base font-light mt-1">
            ({filteredDoctors.length} doctors)
          </p>
        </div>

        {/* Sort & Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <SortDropdown onSortChange={(option) => console.log('Sort by:', option)} />

          {/* Mobile Filter Button */}
          <button
            className="h-10 px-4 py-2 border border-gray-300 rounded-md bg-white cursor-pointer lg:hidden flex items-center gap-2"
            onClick={() => setShowMobileFilter(true)}
          >
            <PiSliders size={20} />
            <span className="text-sm font-semibold">Filters</span>
          </button>

          {/* Mobile Add Doctor Button */}
          <a
            href="/new"
            className="h-10 lg:hidden flex items-center justify-center gap-2 text-sm font-bold text-white bg-cyan-700 px-4 py-2 rounded-md hover:shadow-lg"
          >
            Add Doctor
            <FaArrowRight />
          </a>
        </div>
      </div>

      <FilterLeftSlide
        filters={filters}
        setFilters={setFilters}
        showMobile={showMobileFilter}
        onClose={() => setShowMobileFilter(false)}
      />


      <div className='overflow-y-scroll space-y-3 h-250 lg:h-130'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          filteredDoctors.length > 0 ? (
            filteredDoctors.map((doc, i) => (
              <DoctorCard key={i} {...doc} />
            ))
          ) : (
            <p>No doctors found.</p>
          )
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-end gap-4 my-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 bg-cyan-800 text-white rounded disabled:bg-gray-400"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 bg-cyan-800 text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
}
