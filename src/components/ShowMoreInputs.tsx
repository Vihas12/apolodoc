// ShowMoreInputs.tsx
import React, { useState } from 'react';
import { Filters } from '@/types/filter'; // Ensure the correct import

interface ShowMoreInputsProps {
  buttonText: string;
  inputLabels: string[];
  filterKey: keyof Filters;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const ShowMoreInputs: React.FC<ShowMoreInputsProps> = ({ buttonText, inputLabels, filterKey, filters, setFilters }) => {
  const [showInputs, setShowInputs] = useState(false);

  const toggleFilter = (value: string) => {
    setFilters((prev) => {
      // Ensure filter value is an array, then toggle the value
      const list = Array.isArray(prev[filterKey]) ? prev[filterKey] : [];
      return {
        ...prev,
        [filterKey]: list.includes(value)
          ? list.filter((v) => v !== value)
          : [...list, value],
      };
    });
  };

  return (
    <div>
      {showInputs && (
        <div className="space-y-4 mb-2">
          {inputLabels.map((label, idx) => (
            <label key={idx} className="block">
              <input
                type="checkbox"
                className="mr-2"
                checked={Array.isArray(filters[filterKey]) && filters[filterKey]?.includes(label)}
                onChange={() => toggleFilter(label)}
              />{' '}
              {label}
            </label>
          ))}
        </div>
      )}
      <button
        className="text-cyan-800 font-semibold text-sm cursor-pointer"
        onClick={() => setShowInputs(!showInputs)}
      >
        {showInputs ? 'Show Less' : buttonText}
      </button>
    </div>
  );
};

export default ShowMoreInputs;