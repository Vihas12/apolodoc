import React from 'react';
import { SlLocationPin } from "react-icons/sl";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbSearch } from "react-icons/tb";
import { IoPersonCircleOutline } from "react-icons/io5";
import { SiPantheon } from 'react-icons/si';

function Navbar() {
  return (
    <div className="bg-white shadow-md w-full">
      <div className="flex flex-wrap justify-between items-center px-4 py-2.5 lg:mx-30 lg:p-2">
        
        {/* Logo & Location */}
        <div className="flex flex-1 min-w-0 items-center gap-4 sm:w-auto mb-2 sm:mb-0">
          {/* Logo */}
          <a href="#" className="shrink-0">
            <img
              src="https://images.apollo247.in/images/icons/apollo247.svg"
              alt="logo"
              className="h-10 w-auto sm:h-12 m:w-5"
            />
          </a>

          {/* Location */}
          <div className="flex items-center gap-1 cursor-pointer">
            <SlLocationPin size={20} />
            <div>
              <p className="text-xs text-gray-400">Select Location</p>
              <div className="flex items-center">
                <p className="text-sm font-semibold">Select Address</p>
                <RiArrowDropDownLine size={25} />
              </div>
            </div>
          </div>
        </div>

        {/* Search & Profile */}
        <div className="flex items-center border-2 border-gray-300 bg-gray-100 rounded-lg h-10 px-2 lg:flex-1 min-w-0  md,sm:justify-end w-20 mr-3">
            <TbSearch size={24} className="block" />
            <input
              id="search"
              type="text"
              placeholder="Search Doctors, Specialities, Conditions etc."
              className="ml-2 bg-transparent focus:outline-none text-xs sm:text-sm text-gray-500 w-5 lg:w-64 lg:p-4 lg:pl-6 "
            />


          </div>
          
        <div className="flex  min-w-0 items-center justify-end gap-4 w-auto lg:flex-1 sm:w-auto ">
          
          <a href="#">
            <IoPersonCircleOutline size={30} className="text-green-800 lg:hidden" />
          </a>
          <a href="#" className="border-1 border-green-600 px-4 py-1 rounded-lg hidden lg:flex items-center gap-1 text-sm font-semibold text-green-600 cursor-pointer">
            <span>Login</span>
            <IoPersonCircleOutline size={30} className="text-green-600" />
          </a>
        </div>

      </div>
      
      <div className="bg-white border-b border-gray-300 h-0.5"></div>

      <div className="bg-white h-10 hidden px-0.5 sm:block">
  <div className="lg:flex justify-center items-center h-full">
    <ul className="flex justify-center items-center gap-14 h-full">
      {[
        "Buy Medicines",
        "Find Doctors",
        "Lab Tests",
        "Circle Membership",
        "Health Records",
        "Diabetes Reversal",
      ].map((item) => (
        <li
          key={item}
          className="text-sm font-bold text-black hover:text-green-800 cursor-pointer pb-2 border-b-2 border-transparent hover:border-green-800 transition duration-200"
        >
          {item}
        </li>
      ))}
      <li className="text-sm font-bold text-black hover:text-green-800 cursor-pointer pb-2 border-b-2 border-transparent hover:border-green-800 transition duration-200 flex items-center mr-5">
        Buy Insurance
        <div className="h-5 w-8 flex items-center bg-green-100 text-xs text-gray-600 justify-center ml-1">
          New
        </div>
      </li>
    </ul>
  </div>
</div>

    </div>
    
  );
}

export default Navbar;
