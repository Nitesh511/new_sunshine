import React from 'react';

const FeatureSection = ({ features }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-6 bg-white shadow-lg rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center p-4 rounded-lg">
            <div className="text-gray-800 text-4xl"> {/* Adjust icon size */}
              {feature.icon}
            </div>
            <h3 className="text-gray-800 text-center text-lg mt-4"> {/* Adjust spacing */}
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
