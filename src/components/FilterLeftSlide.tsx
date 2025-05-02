import React from "react";
import ShowMoreInputs from "./ShowMoreInputs";

interface Filters {
  hospitalVisit: boolean;
  onlineConsult: boolean;
  experience: string[];
  feeRange: string[];
  language: string[];
  clinic: string[];
}

interface FilterLeftSlideProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  showMobile?: boolean;
  onClose?: () => void;
}

export default function FilterLeftSlide({
  filters,
  setFilters,
  showMobile = false,
  onClose,
}: FilterLeftSlideProps) {
  const toggleFilter = (key: keyof Filters, value: string) => {
    setFilters((prev) => {
      const list = prev[key] as string[];
      return {
        ...prev,
        [key]: list.includes(value)
          ? list.filter((v) => v !== value)
          : [...list, value],
      };
    });
  };

  const handleHospitalChange = () => {
    if (!filters.onlineConsult) return;
    setFilters((prev) => ({ ...prev, hospitalVisit: !prev.hospitalVisit }));
  };

  const handleOnlineChange = () => {
    if (!filters.hospitalVisit) return;
    setFilters((prev) => ({ ...prev, onlineConsult: !prev.onlineConsult }));
  };

  const sidebarContent = (
    <>
      <div className="flex items-center justify-between mb-4 border-b border-gray-300 pb-4">
        <h2 className="text-base font-semibold">Filters</h2>
        <button
          className="text-base cursor-pointer text-cyan-800 font-semibold"
          onClick={() =>
            setFilters({
              hospitalVisit: true,
              onlineConsult: true,
              experience: [],
              feeRange: [],
              language: [],
              clinic: [],
            })
          }
        >
          Clear All
        </button>
      </div>

      <div>
        <button className="text-xs font-semibold w-full border border-cyan-800 text-cyan-800 px-4 py-2 rounded-lg cursor-pointer mb-4">
          Show Doctors near me
        </button>
      </div>

      {/* Mode of Consult */}
      <div className="mb-4">
        <h3 className="font-semibold text-base">Mode of Consult</h3>
        <div className="space-y-4 mt-3 pl-2">
          <label className="block">
            <input
              type="checkbox"
              checked={filters.hospitalVisit}
              onChange={handleHospitalChange}
            />{" "}
            Hospital Visit
          </label>
          <label className="block">
            <input
              type="checkbox"
              checked={filters.onlineConsult}
              onChange={handleOnlineChange}
            />{" "}
            Online Consult
          </label>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-4">
        <h3 className="font-semibold text-base">Experience (In Years)</h3>
        <div className="space-y-4 mt-3 pl-2">
          {["0-5", "6-10", "11-16"].map((exp) => (
            <label key={exp} className="block">
              <input
                type="checkbox"
                checked={filters.experience.includes(exp)}
                onChange={() => toggleFilter("experience", exp)}
              />{" "}
              {exp}
            </label>
          ))}
          <ShowMoreInputs
            buttonText="+1 More"
            inputLabels={["16+"]}
            filterKey="experience"
            filters={filters}
            setFilters={setFilters}
          />
        </div>
      </div>

      {/* Fees */}
      <div className="mb-4">
        <h3 className="font-semibold text-base">Fees (In Rupees)</h3>
        <div className="space-y-4 mt-3 pl-2">
          {["100-500", "500-1000", "1000+"].map((fee) => (
            <label key={fee} className="block">
              <input
                type="checkbox"
                checked={filters.feeRange.includes(fee)}
                onChange={() => toggleFilter("feeRange", fee)}
              />{" "}
              {fee}
            </label>
          ))}
        </div>
      </div>

      {/* Language */}
      <div className="mb-4">
        <h3 className="font-semibold text-base">Language</h3>
        <div className="space-y-4 mt-3 pl-2">
          {["English", "Hindi", "Telugu"].map((lang) => (
            <label key={lang} className="block">
              <input
                type="checkbox"
                checked={filters.language.includes(lang)}
                onChange={() => toggleFilter("language", lang)}
              />{" "}
              {lang}
            </label>
          ))}
          <ShowMoreInputs
            buttonText="+1 More"
            inputLabels={[
              "Punjabi",
              "Bengali",
              "Marathi",
              "Urdu",
              "Gujarati",
              "Tamil",
              "Kannada",
              "Oriya",
              "Persian",
              "Assamese",
            ]}
            filterKey="language"
            filters={filters}
            setFilters={setFilters}
          />
        </div>
      </div>

      {/* Clinics */}
      <div className="mb-4">
        <h3 className="font-semibold text-base">Clinic</h3>
        <div className="space-y-4 mt-3 pl-2">
          {["Apollo Hospital", "Other Clinics"].map((clinic) => (
            <label key={clinic} className="block">
              <input
                type="checkbox"
                checked={filters.clinic.includes(clinic)}
                onChange={() => toggleFilter("clinic", clinic)}
              />{" "}
              {clinic}
            </label>
          ))}
        </div>
      </div>

      {onClose && (
        <button
          className="mt-4 w-full py-2 bg-cyan-800 text-white rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      )}
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
        showMobile ? "translate-x-0" : "-translate-x-full"
      } lg:hidden`}
    >
      <div className="p-4 h-full overflow-y-auto">{sidebarContent}</div>
    </div>
  );
}
