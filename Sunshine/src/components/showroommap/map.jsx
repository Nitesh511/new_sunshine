import React from 'react';

const ShowroomMap = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Find A Showroom Near You</h2>
        <div className="relative h-96 sm:h-[32rem] overflow-hidden rounded-lg">
          <img
            src="https://watsonblinds.com.au/wp-content/uploads/2023/02/Location-map-20022023.jpg"
            alt="Showroom Map"
            className="w-full h-full object-cover"
          />
    
        </div>
      </div>
    </div>
  );
};

export default ShowroomMap;