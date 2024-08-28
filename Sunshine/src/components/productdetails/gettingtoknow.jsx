import React from 'react';

export const GettingToKnowMotorisedBlinds = ({title,description}) => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto font-subheading ">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          {title}
        </h1>
        <p className="text-gray-700 mb-8">
         {description}
        </p>
    
      </div>
    </div>
  );
};


export const MotorisedBlindsLayout = ({ image1, image2 }) => {
    return (
      <div className="flex flex-col items-center mb-10 -mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-6xl">
          <div className="flex justify-center items-center">
            <img
              className="w-[800px] h-[400px] object-cover rounded-lg shadow-lg"
              src={image1}
              alt="Man on couch"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-[800px] h-[400px] object-cover rounded-lg shadow-lg"
              src={image2}
              alt="Woman in living room"
            />
          </div>
        </div>
      </div>
    );
  };
  

  export const Wheredoyouuse = ({ title, title2, description }) => {
    // Replace commas with newlines, then split description into an array of items
    const descriptionItems = description
      .split('\n')          // Split by newlines
      .filter(item => item.trim() !== ''); // Remove any empty items
  
    // Function to make text before a colon bold
    const formatItem = (item) => {
      const parts = item.split(':');
      if (parts.length > 1) {
        return (
          <>
            <strong>{parts[0]}</strong>: {parts[1]}
          </>
        );
      }
      return item;
    };
  
    return (
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto font-subheading">
          <h1 className="text-3xl text-gray-900 mb-4 text-center">
            {title}
          </h1>
          <p className="text-lg text-gray-900 mb-4">
            {title2}
          </p>
          <ul className="text-gray-700 space-y-4 list-disc list-inside font-subheading">
            {descriptionItems.map((item, index) => (
              <li key={index} className="">
                {formatItem(item)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  