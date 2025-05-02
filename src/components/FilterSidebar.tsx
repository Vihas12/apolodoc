import React, { useState } from "react";

import ShowMoreInputs from "./ShowMoreInputs";
export default function FilterSidebar() {
  const [hospitalVisit, setHospitalVisit] = useState(true);
  const [onlineConsult, setOnlineConsult] = useState(true);

  const handleHospitalChange = () => {
    if (!onlineConsult) return; // prevent both from being false
    setHospitalVisit(!hospitalVisit);
  };

  const handleOnlineChange = () => {
    if (!hospitalVisit) return; // prevent both from being false
    setOnlineConsult(!onlineConsult);
  };
    return (
      <aside className="w-55 pr-4 pt-3 h-175 overflow-y-scroll hidden lg:block">
        <div className="flex items-center justify-between mb-4 border-b border-gray-300 pb-4">
        <h2 className="text-base font-semibold">Filters</h2>
        <button className="text-base cursor-pointer text-cyan-800 font-semibold">Clear All</button>
        </div>
        <div>
        <button className="text-xs font-semibold w-full border border-cyan-800 text-cyan-800 px-4 py-2 rounded-lg cursor-pointer mb-4 ">Show Doctors near me</button>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-base">Mode of Consult</h3>
          <div className="space-y-4 mt-3 pl-2">
            <label className="block"><input type="checkbox" checked={hospitalVisit} onChange={handleHospitalChange} /> Hospital Visit</label>
            <label className="block"><input type="checkbox" checked={onlineConsult} onChange={handleOnlineChange} /> Online Consult</label>
          </div>
        </div>
  
        <div className="mb-4">
          <h3 className="font-semibold text-base">Experience (In Years)</h3>
          <div className="space-y-4 mt-3 pl-2">
            <label className="block"><input type="checkbox" /> 0-5</label>
            <label className="block"><input type="checkbox" /> 6-10</label>
            <label className="block"><input type="checkbox" /> 11-16</label>
            <ShowMoreInputs 
              buttonText="+1 More" 
              inputLabels={["16+"]} 
            />

          </div>
        </div>
  
        <div className="mb-4">
          <h3 className="font-semibold text-base">Fees (In Rupees)</h3>
          <div className="space-y-4 mt-3 pl-2">
            <label className="block"><input type="checkbox" /> 100-500</label>
            <label className="block"><input type="checkbox" /> 500-1000</label>
            <label className="block"><input type="checkbox" /> 1000+</label>
          </div>
        </div>
  
        <div className="mb-4">
          <h3 className="font-semibold text-base">Language</h3>
          <div className="space-y-4 mt-3 pl-2">
            <label className="block"><input type="checkbox" /> English</label>
            <label className="block"><input type="checkbox" /> Hindi</label>
            <label className="block"><input type="checkbox" /> Telugu</label>
            <ShowMoreInputs 
              buttonText="+1 More" 
              inputLabels={["Punjabi","Bengali","Marathi","Urdu","Gujarati","Tamil","Kannada","Oriya","Persian","Assamese"]} 
            />          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-base">Fees (In Rupees)</h3>
          <div className="space-y-4 mt-3 pl-2">
            <label className="block"><input type="checkbox" /> Apollo Hospital</label>
            <label className="block"><input type="checkbox" /> Other Clinics</label>
          </div>
        </div>
      </aside>
    );
  }
  