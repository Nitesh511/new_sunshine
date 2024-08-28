import React from 'react';
import upto from "../../assets/upto.png";
import expertise from "../../assets/locally.png";
import lifephoto from "../../assets/life.png";


const TopNavbar = () => {
  return (
    <nav className="bg-gray-100 py-5 overflow-x-auto">
      <div className="container mx-auto flex gap-3 sm:gap-5 px-8 font-subheading">
        <div className="flex items-center">
          <img src={lifephoto} alt="Check Icon" className="h-10 mr-2" />
          <span className="text-black text-base font-bold">Product Lifetime Warranties</span>
        </div>
        {/* <div className="flex items-center">
          <img src={sixyears} alt="50 Years Experience" className="h-6 mr-2" />
          <span className="text-black text-sm font-medium">6 Years Experience</span>
        </div> */}
        <div className="flex items-center">
          <img src={expertise} alt="Local Manufacturing" className="h-8 mr-2" />
          <span className="text-black text-base font-bold">Local Manufacturing</span>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
