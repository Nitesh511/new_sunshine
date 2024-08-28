import React from "react";

const BookingBanner = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col md:flex-row relative overflow-hidden p-4 sm:p-6 lg:p-8">
      {/* Image on the left */}
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src={imageUrl}
          alt="Booking Appointment"
          className="w-full h-48 sm:h-56 md:h-64 lg:h-full object-cover"
        />
      </div>

      {/* Text and button on the right */}
      <div className="flex-1 flex items-center justify-center bg-customColorRgb  p-4 sm:p-6 md:p-8 lg:p-10 text-white">
        <div className="text-center md:text-left max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6">{description}</p>
          <a 
            href="tel: +0435 595 003"
            className=" bg-yellow-800 hover:bg-yellow-600 text-white font-bold py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 lg:py-3.5 lg:px-7 rounded-lg transition duration-300"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookingBanner;
