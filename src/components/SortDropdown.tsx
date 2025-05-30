import { useState } from 'react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { LuArrowUpDown } from "react-icons/lu";
type SortDropdownProps = {
  onSortChange?: (option: string) => void;
};

const options: string[] = [
  'Relevance',
  'Availability',
  'Nearby',
  'Price - low to high',
  'Price - High to low',
  'Years of Experience',
  'Most Liked'
];

export default function SortDropdown({ onSortChange }: SortDropdownProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>('Availability');

  const handleSelect = (option: string) => {
    setSelected(option);
    setOpen(false);
    onSortChange?.(option);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="w-33 h-10 bg-cyan-100 border-cyan-800 lg:w-43 lg:h-12 flex items-center justify-between gap-2 px-4 py-2 border lg:border-gray-300 rounded-md lg:bg-white cursor-pointer"
      >
        <div className='flex items-center'> 
            <LuArrowUpDown size={25} className='text-gray-800 mr-1 hidden lg:block'/>
            <span className="text-sm font-semibold text-cyan-800 lg:text-gray-800 lg:font-medium">{selected}</span>
        </div>
         {open ? <RiArrowDropUpLine size={24} className='text-cyan-800 lg:text-gray-800'/> : <RiArrowDropDownLine size={24} className='text-cyan-800 lg:text-gray-800'/>}
      </button>

      {open && (
        <ul className="absolute z-10 mt-2 w-43 h-52 overflow-y-scroll bg-white rounded-md shadow-2xl">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2.5 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
