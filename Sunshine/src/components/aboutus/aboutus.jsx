import React, { useEffect, useState } from "react";
import { useGetaboutQuery } from "../redux/api";
import LoadingPage from "../loading_page/loadingpage";
import about123 from "../../assets/about123.jpg";

const AboutUs = () => {
  const [about, setAbout] = useState([]);

  const { data, isLoading, error } = useGetaboutQuery();

  useEffect(() => {
    if (data) {
      setAbout(data.data);
      console.table(data); // Log the data to the console
    }
  }, [data]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div>Error Loading Data: {error.message}</div>;
  }

  return (
    <div 
      className="py-8 bg-cover bg-center" 
      style={{ backgroundImage: `url(${about123})` }}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center font-subheading">
          {about.map((items, index) => (
            <React.Fragment key={index}>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
                  {items.attributes.title}
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                  {items.attributes.des}
                </p>
              </div>

              <div className="flex-1 flex justify-center md:justify-end">
                <img
                  src={`${process.env.STRAPI_API}${items.attributes.img.data.attributes.url}`}
                  alt="About Us"
                  className="w-full max-w-md md:max-w-lg lg:max-w-xl h-62 md:h-48 lg:h-[400px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
