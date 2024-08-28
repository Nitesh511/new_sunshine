import React from 'react';

const WhySunShineComponent = () => {
  return (
    <div className="flex flex-col md:flex-row md:p-20 ml-2 -mt-24">
      <div className="md:w-2/3 relative">
        <img
          src="https://watsonblinds.com.au/wp-content/uploads/2018/06/2018-06-06.jpg"
          alt="Why Watson"
          className="w-full h-96 object-cover"
        />
      </div>
      <div className="md:w-2/4 bg-blue-900 text-white p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">WHY SUNSHINE?</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            The Only Local Factory In The Region
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            100% Family Owned And Operated
          </li>
          {/* Add the rest of the list items here */}
        </ul>
        <button className="bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded mt-4">
          GET TOUCH
        </button>
      </div>
    </div>
  );
};

export default WhySunShineComponent;