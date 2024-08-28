import React from "react";

const BlindsSection = ({
  title,
  description,
  imageUrl,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="py-4 flex justify-center transition ease-in-out delay-150 duration-300 hover:scale-105 ">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col  sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full">
        <img
          className="w-full h-48 sm:h-64 object-cover"
          src={imageUrl}
          alt={title}
        />
        <div className="p-4 flex flex-col h-auto">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4 overflow-hidden text-ellipsis line-clamp-3">
            {description}
          </p>
          <a
            href={buttonLink}
            className=" bg-customColorRgb hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-medium  block w-full text-center"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlindsSection;
