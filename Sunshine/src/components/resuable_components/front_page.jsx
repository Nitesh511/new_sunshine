import React from 'react';

const FrontPage = ({ imageUrl, title, description, buttonText, buttonLink }) => {
    const formattedDescription = description.split('<br>').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
    ));

    return (
        <div className="flex flex-col md:flex-row  mt-24 p-0 md:p-10 mx-auto">
            {/* Image on the left */}
            <div className="flex-shrink-0 w-full md:w-2/3 flex items-center">
                <img
                    src={imageUrl}
                    alt="Living Room with Motorized Blinds"
                    className="w-full h-full object-cover  shadow-md"
                />
            </div>

            {/* Additional information on the right */}
            <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col justify-center bg-gray-100 p-6 shadow-md">
                <div className=" text-black font-bold text-2xl text-center mb-4">
                    {title}
                </div>
                <p className="text-gray-700 mb-8 text-center md:text-left">
                    {formattedDescription}
                </p>
                <a
                    href="tel:0435 595 003"
                    className=" bg-customColorRgb text-white font-bold py-2 px-6 rounded-md hover:bg-yellow-600 transition block mx-auto text-center "
                >
                    {buttonText}
                </a>
            </div>
        </div>
    );
};

export default FrontPage;
