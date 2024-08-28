import React, { useEffect, useState } from "react";
import AboutUs from "../aboutus/aboutus";
import Banner from "./banner";
import BlindsSection from "../resuable_components/products";
import FrontPage from "../resuable_components/front_page";
import BookingBanner from "../booking_banner/booking_banner";
import ShowroomMap from "../showroommap/map";
import ClientReviews from "../reviews/reviews";
import reviewsData from "../reviews/reviews_data";
import { useGetdashboardproductsQuery, useGetdashboardQuery } from "../redux/api";
import LoadingPage from "../loading_page/loadingpage";
import HelmetData from "../helmet/helmet";
import Gallery from "../gallery/gallery";


const Dashboard = () => {
  const [dash, setDash] = useState([]);
  const [dashproduct, setDashProduct] = useState([]);
  
  const { data: dashboarddata, isLoading: dahboardloading, error: dashboarderror } = useGetdashboardQuery();
  const { data: dashproducts, isLoading: dashloading, error: dasherror } = useGetdashboardproductsQuery();

  useEffect(() => {
    if (dashboarddata) {
      setDash(dashboarddata.data);
    }
    if (dashproducts) {
      setDashProduct(dashproducts.data);
    }
  }, [dashboarddata, dashproducts]);

  const isLoading = dahboardloading || dashloading;
  const error = dashboarderror || dasherror;

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div>Error Loading Data: {error.message}</div>;
  }

  // Function to determine the link based on the title
  const getLinkBasedOnTitle = (title) => {
    switch (title.toLowerCase()) {
      case 'blinds':
        return '/blinds';
      case 'curtains':
        return '/curtains';
      case 'shutters':
        return '/shutters';
      case 'awnings':
        return '/awnings';
      case 'commercial':
        return '/commercial';
      default:
        return '#'; // Default link if no match found
    }
  };

  return (
    <>
   <HelmetData title={"SUN SHINE BLINDS CANBERRA"}/>
      <div className="bg-white">
        <div className="container mx-auto py-3">
          {/* Main text centered at the top */}
          {dash.length > 0 ? (
            dash.map((items, index) => (
              <div key={index}>
                <div className="flex flex-col items-center text-center mb-16 font-subheading">
                  <h1 className="text-3xl md:text-3xl font-bold text-customColorRgb mb-4">
                    {items.attributes.title1}
                  </h1>
                  <p className=" text-customColorRgb mb-8 font-subheading text-lg font-bold">
                    {items.attributes.title2}
                  </p>
                </div>
                <div className="-mt-32 font-subheading">
                  <FrontPage
                    imageUrl={`${process.env.STRAPI_API}${items.attributes.img.data.attributes.url}`}
                    title={items.attributes.imgtext1}
                    description={items.attributes.imgtext2}
                    buttonText={items.attributes.buttontext}
                    buttonLink="#"
                  />
                </div>
              </div>
            ))
          ) : (
            <div>No data available</div>
          )}
        </div>
      </div>

      <AboutUs />
      <div className="-mt-16 lg:mt-0"></div>
      <Banner />

      <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-0 md:p-10 -mt-10 md:-mt-20 font-subheading">
        {dashproduct.map((items, index) => {
          const link = getLinkBasedOnTitle(items.attributes.title);
          return (
            <a
              key={index}
              href={link}
              className="block relative cursor-pointer"
            >
              <BlindsSection
                title={items.attributes.title}
                description={items.attributes.des}
                imageUrl={`${process.env.STRAPI_API}${items.attributes.img.data.attributes.url}`}
                buttonText={items.attributes.buttontext}
                buttonLink={link}
              />
            </a>
          );
        })}
      </div>

      <BookingBanner
        title="Book Your Appointment Today and Receive a Free $200 Voucher!"
        description="Our skilled customer consultants are here to assist you in creating the home you’ve always wanted. Book an appointment with our local experts and start your journey to a beautifully transformed space."
        buttonText="BOOK NOW"
        buttonLink="#"
        imageUrl="https://img.freepik.com/premium-photo/female-designer-client-working-with-fabric-samples-selecting-fabrics-design-curtains_116407-8577.jpg"
      />

      {/* <ShowroomMap />

      <ClientReviews reviews={reviewsData} /> */}

      <Gallery/>
    </>
  );
};

export default Dashboard;
