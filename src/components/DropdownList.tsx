import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

interface DropdownListProps {
  label: string;
  items: string[];
  renderItem?: (item: string) => React.ReactNode;
}

const DropdownList = ({ label, items, renderItem }: DropdownListProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-start items-center bg-white py-2 text-sm font-bold cursor-pointer"
      >
        {label}
        {isOpen ? <RiArrowDropUpLine size={24} /> : <RiArrowDropDownLine size={24} />}
      </button>

      {isOpen && (
        <ul className="absolutebg-white py-1 text-xs text-gray-500 max-h-96 overflow-auto grid grid-cols-1 lg:grid-cols-2 gap-x-4 list-disc list-inside">
          {items.map((item, index) => (
            <li key={index} className="cursor-pointer">
              {renderItem ? renderItem(item) : item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownList;
