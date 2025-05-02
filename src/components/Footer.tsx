import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube, FaApple } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-xs lg:text-sm">
        {/* Related Health Articles */}
        <div>
          <h2 className="font-semibold mb-3">Related Health Articles</h2>
          <ul className="space-y-2">
            <li><a href="#">Chickenpox Diet: What To Eat And What Not To Eat</a></li>
            <li><a href="#">CRP Test: Normal Range, Procedure and Results</a></li>
            <li><a href="#">Mounjaro for Weight Loss: Is It Safe and Effective?</a></li>
            <li><a href="#">How To Use Prega News? Guide for Early Pregnancy</a></li>
            <li><a href="#">20 Things You Must Have In Your First-Aid Kit</a></li>
          </ul>
        </div>

        {/* About Apollo 247 */}
        <div>
          <h2 className="font-semibold mb-3">About Apollo 247</h2>
          <ul className="space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us / Grievance</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Health Queries</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Apollo 247 Sitemap</a></li>
            <li><a href="#">Hospitals And Clinics</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="font-semibold mb-3">Services</h2>
          <ul className="space-y-2">
            <li><a href="#">Online Doctor Consultation</a></li>
            <li><a href="#">Online Medicines</a></li>
            <li><a href="#">Doctors by Specialty</a></li>
            <li><a href="#">Apollo Diabetes Reversal</a></li>
            <li><a href="#">Apollo Pro Health Program</a></li>
          </ul>
        </div>

        {/* Top Specialties */}
        <div>
          <h2 className="font-semibold mb-3">Top Specialties</h2>
          <ul className="space-y-2">
            <li><a href="#">Consult Physicians</a></li>
            <li><a href="#">Consult Dermatologists</a></li>
            <li><a href="#">Consult Paediatricians</a></li>
            <li><a href="#">Consult Gynaecologists</a></li>
            <li><a href="#">Consult Cardiologists</a></li>
          </ul>
        </div>

        {/* Book Lab Tests at Home */}
        <div>
          <h2 className="font-semibold mb-3">Book Lab Tests at Home</h2>
          <ul className="space-y-2">
            <li><a href="#">RT PCR Test At Home</a></li>
            <li><a href="#">Renal Profile</a></li>
            <li><a href="#">Lipid Profile Test</a></li>
            <li><a href="#">CBC Test</a></li>
            <li><a href="#">Liver Function Test</a></li>
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <h2 className="font-semibold mb-3">Product Categories</h2>
          <ul className="space-y-2">
            <li><a href="#">Health Care</a></li>
            <li><a href="#">Personal Care</a></li>
            <li><a href="#">Baby Care</a></li>
            <li><a href="#">Nutrition</a></li>
            <li><a href="#">Diabetes Care</a></li>
          </ul>
        </div>
      </div>

      {/* Second row: Hospitals and Momverse */}
      <div className=" max-w-7xl mx-auto mt-10 mb-20 grid grid-cols-2  text-xs lg:text-sm">
        {/* Top Hospitals */}
        <div>
          <h2 className="font-semibold mb-3">Top Hospitals</h2>
          <ul className="space-y-2">
            <li><a href="#">Apollo Hospital Jubilee Hills</a></li>
            <li><a href="#">Apollo Hospitals Greams Road</a></li>
            <li><a href="#">Indraprastha Apollo Hospital</a></li>
            <li><a href="#">Apollo Hospitals Bannerghatta Road</a></li>
            <li><a href="#">Apollo Hospital - Belapur, Navi Mumbai</a></li>
            <li><a href="#">Apollo Hospitals Canal Circular Road</a></li>
          </ul>
        </div>

        {/* Momverse */}
        <div>
          <h2 className="font-semibold mb-3">Momverse</h2>
          <ul className="space-y-2">
          <li><a href="#">Momverse</a></li>
          <li><a href="#">MomVerse Home</a></li>
          <li><a href="#">Preconception</a></li>
          <li><a href="#">Pregnancy</a></li>
          <li><a href="#">Postpartum</a></li>
          <li><a href="#">Newborn & Infant</a></li>
          <li><a href="#">First Trimester</a></li>
          <li><a href="#">Second Trimester</a></li>
          <li><a href="#">Third Trimester</a></li>
          <li><a href="#">Ovulation</a></li>
          <li><a href="#">Infertility</a></li>
          <li><a href="#">Postpartum Mental Health</a></li>
          <li><a href="#">Pregnancy Articles</a></li>
          <li><a href="#">Postpartum Articles</a></li>
          <li><a href="#">3 months Pregnancy</a></li>
          <li><a href="#">2 months Pregnancy</a></li>
          <li><a href="#">Breastfeeding</a></li>
          <li><a href="#">Baby Food</a></li>
          <li><a href="#">Baby Vaccination</a></li>
          <li><a href="#">6 Month Old Baby</a></li>
          <li><a href="#">Popular Girl Baby Names</a></li>
          </ul>
        </div>
        {/* Logo Section */}
        
      </div>

      <div className="border-t-4 border-gray-400 pt-15 max-w-7xl mx-auto mt-10 text-center flex flex-col space-y-9  items-center  lg:justify-between lg:text-left space-y-4 lg:space-y-0 lg:flex-row-reverse">
  
          {/* Social Media Icons - Show First on Small Screens */}
          <div className="order-1 lg:order-none flex flex-col items-center space-y-2">
            <span className="text-base font-semibold">Find Us</span>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600">
                {/* Facebook Icon */}
                <FaFacebook size={45}/>
              </a>
              <a href="#" className="text-black">
                {/* X (Twitter) Icon */}
                <FaSquareXTwitter size={45}/>              
                </a>
              <a href="#" className="text-blue-600">
                {/* LinkedIn Icon */}
                <FaLinkedin size={45}/>
             </a>
              <a href="#" className="text-red-600">
                {/* YouTube Icon */}
                <FaYoutube size={45}/>
              </a>
            </div>
          </div>

          {/* App Store Buttons - Show Second */}
          <div className="order-1 lg:order-none flex flex-col items-center space-y-2">
            <span className="text-base font-semibold">Get Apollo Mobile App</span>
            <div className="flex space-x-4">           
              <a href="#" className="flex items-center bg-black text-white px-2 py-1 rounded-lg">
              {/* Google Play Icon */}
              <IoLogoGooglePlaystore size={30}/>
              <p className="ml-2"><span className="text-xs">Get on</span><br /><span className="font-semibold">Google Play</span></p>
              
            </a>
            <a href="#" className="flex items-center bg-black text-white px-2 py-1 rounded-lg">
              {/* App Store Icon */}
              <FaApple size={30}/>
              <p className="ml-2"><span className="text-xs">Download on the</span><br /><span className="font-semibold">App Store</span></p>
            </a>
          </div>
          </div>

          {/* Logo - Show Last */}
          <div className="order-3 lg:order-none flex justify-center items-center">
            <img src="https://images.apollo247.in/images/icons/apollo247.svg" alt="Apollo247" className="w-25"/>
          </div>
        </div>

    </footer>
  );
};

export default Footer;
