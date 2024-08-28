import React from 'react';
import { GiSydneyOperaHouse, GiTheaterCurtains } from "react-icons/gi";
import { FaChild } from "react-icons/fa";
import { MdLineWeight } from "react-icons/md";

const Banner = () => {
  return (
    <div className="bg-white py-4 px-2 sm:py-6 sm:px-4 md:py-8 md:px-6 lg:py-12 lg:px-8">
      <div className="container mx-auto flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 shadow-md rounded-lg p-4 ">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 flex flex-col items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-customColorRgb rounded-full flex justify-center items-center mb-4">
            <GiSydneyOperaHouse className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
          </div>
          <span className="text-gray-700 text-sm md:text-base lg:text-lg font-medium text-center">
            Manufactured In Canberra
          </span>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 flex flex-col items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20  bg-customColorRgb rounded-full flex justify-center items-center mb-4">
            <FaChild className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
          </div>
          <span className="text-gray-700 text-sm md:text-base lg:text-lg font-medium text-center">
            100% Child Safe
          </span>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 flex flex-col items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20  bg-customColorRgb rounded-full flex justify-center items-center mb-4">
            <MdLineWeight className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
          </div>
          <span className="text-gray-700 text-sm md:text-base lg:text-lg font-medium text-center">
            Full Light and View Control
          </span>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 flex flex-col items-center">
          <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20  bg-customColorRgb rounded-full flex justify-center items-center mb-4">
            <GiTheaterCurtains className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
          </div>
          <span className="text-gray-700 text-sm md:text-base lg:text-lg font-medium text-center">
            Limited Lifetime Warranty
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
