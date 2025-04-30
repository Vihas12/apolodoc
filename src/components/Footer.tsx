import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 text-sm">
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
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-sm">
        {/* Top Hospitals */}
        <div>
          <h2 className="font-semibold mb-3">Top Hospitals</h2>
          <ul className="space-y-2">
            <li><a href="#">Apollo Hospital Jubilee Hills</a></li>
            <li><a href="#">Apollo Hospitals Greams Road</a></li>
            <li><a href="#">Indraprastha Apollo Hospital</a></li>
            <li><a href="#">Apollo Hospitals Bannerghatta Road</a></li>
            <li><a href="#">Apollo Hospital - Belapur, Navi Mumbai</a></li>
          </ul>
        </div>

        {/* Momverse */}
        <div>
          <h2 className="font-semibold mb-3">Momverse</h2>
          <ul className="space-y-2">
            <li><a href="#">Preconception</a></li>
            <li><a href="#">Pregnancy</a></li>
            <li><a href="#">Postpartum</a></li>
            <li><a href="#">Breastfeeding</a></li>
            <li><a href="#">Baby Food</a></li>
          </ul>
        </div>
        {/* Logo Section */}
        <div className="flex items-center">
 </div>

          {/* App Store Buttons */}
          <div className="flex space-x-4">
            <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-.86 3.71-.86.93 0 2.42.43 3.29 1.66-2.02 1.18-1.95 4.05.15 5.36 1.3.81 2.68.38 3.29-.86-.08 1.28-.86 2.5-1.85 3.45zM15.41 6.13c-.62.75-1.66 1.24-2.74 1.24-.15-1.03.36-2.07 1-2.82.65-.75 1.71-1.24 2.74-1.24.15 1.03-.36 2.07-1 2.82z"/>
              </svg>
              Get on Google Play
            </a>
            <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05 1.92-3.29 1.92-1.31 0-1.67-.79-3.29-.79-1.62 0-2.03.79-3.29.79-1.24 0-2.34-.98-3.29-1.92-1.92-1.92-3.45-5.05-3.45-8.28 0-5.14 3.34-7.82 6.62-7.82 1.72 0 3.29.98 4.24.98.95 0 2.67-.98 4.24-.98 2.86 0 5.14 2.67 5.14 6.62 0 2.29-.86 5.14-2.58 6.48zm-4.24-15.67c0 1.24-.67 2.29-1.72 3.05-.95.67-2.19.38-3.05-.48-.86-.86-1.14-2.1-.48-3.05.67-1.05 1.72-1.72 3.05-1.72 1.33-.01 2.2.67 2.2 2.2z"/>
              </svg>
              Download on the App Store
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <span className="text-2xl">Find Us</span>
            <a href="#" className="text-blue-600">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-6.92H7.9v-2.88H10v-2.32c0-2.07 1.24-3.2 3.13-3.2.9 0 1.85.16 1.85.16v2.03h-1.04c-1.02 0-1.34.64-1.34 1.3v1.03h2.28l-.36 2.88h-1.92V21.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            <a href="#" className="text-black">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="text-blue-600">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-2.5L10 12v5zm0-6l-5 2.5L10 7v4zm4 6l5-2.5L14 12v5zm0-6l5 2.5L14 7v4z"/>
              </svg>
            </a>
            <a href="#" className="text-red-600">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-1.854-.831-3.847-1.398-5.961-1.672-.844-.138-1.688.615-1.688 1.538v.692c-2.077.138-3.923-.692-5.769-1.846-1.846-1.154-3.231-2.615-4.615-4.615-.615-.923-1.538-.308-1.538.615 0 3.692 1.846 6.923 4.615 9.231-.923 0-1.846-.077-2.769-.231-.923-.154-1.538.615-1.154 1.538 1.154 3.077 3.692 5.615 6.923 6.769-2.769 2.154-6 3.231-9.692 3.231-.923 0-1.538.615-.923 1.538 2.769 3.692 7.385 5.769 12.462 5.769 9.231 0 14.308-7.615 14.308-14.308 0-.231 0-.462-.015-.692.923-.615 1.692-1.385 2.308-2.308.615-.923-.308-1.538-1.154-.923-1.538.923-3.231 1.538-5.077 1.846 1.154-1.154 2.308-2.615 3.077-4.615.615-.923-.308-1.538-1.154-.923z"/>
              </svg>
            </a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
