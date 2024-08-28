import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-500 via-gray-700 to-black text-white font-subheading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="text-xl font-bold mb-4 text-orange-500 underline underline-offset-4">Find a Showroom Near You</h3>
          <ul className="space-y-3">
            <li><Link to="/contact" className="text-white hover:text-orange-600 transition-colors duration-300">Sunshine Blinds Canberra</Link></li>
          </ul>
        </div>
        
        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="text-xl font-bold mb-4 text-orange-500 underline underline-offset-4">Sunshine Blinds</h3>
          <ul className="space-y-3">
            <li><Link to="/aboutus" className="text-white hover:text-orange-600 transition-colors duration-300">About Us</Link></li>
            <li><Link to="/contact" className="text-white hover:text-orange-600 transition-colors duration-300">Contact Us</Link></li>
            <li><Link to="/request" className="text-white hover:text-orange-600 transition-colors duration-300">Service Request</Link></li>
          </ul>
        </div>

        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <h3 className="text-xl font-bold mb-4 text-orange-500 underline underline-offset-4">Products</h3>
          <ul className="space-y-3">
            <li><Link to="/blinds" className="text-white hover:text-orange-600 transition-colors duration-300">Blinds</Link></li>
            <li><Link to="/curtains" className="text-white hover:text-orange-600 transition-colors duration-300">Curtains</Link></li>
            <li><Link to="/shutters" className="text-white hover:text-orange-600 transition-colors duration-300">Shutters</Link></li>
            <li><Link to="/awnings" className="text-white hover:text-orange-600 transition-colors duration-300">Awnings</Link></li>
          </ul>
        </div>

      </div>
      
      <div className="mt-0 text-center bg-gray-800 py-6">
        <p className="text-sm text-gray-400">&copy; Copyright 2024 Sunshine Blinds Canberra | All rights reserved. <a href="#" className="text-orange-500 hover:text-orange-700 transition-colors duration-300">Terms & Conditions</a></p>
      </div>
    </footer>
  );
};

export default Footer;
