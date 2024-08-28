import React, { useEffect, useState } from "react";
import FrontPage from "../resuable_components/front_page";
import FeatureSection from "../resuable_components/features_section";
import { GiKangaroo } from "react-icons/gi";
import { GiBorderedShield } from "react-icons/gi";
import { GiLightBulb } from "react-icons/gi";
import { FaAward } from "react-icons/fa";
import BlindsSection from "../resuable_components/products";
import blindData from "./blinds";
import BookingBanner from "../booking_banner/booking_banner";
import BrochureRequestForm from "../bourchers_form/bourches_form";
import { WindowBlindsSection, Automating } from "./whysunshine";
import ChooseTransparency from "./transperency";
import FAQs from "../faq/faq";
import ClientReviews from "../reviews/reviews";
import reviewsData from "../reviews/reviews_data";
import { useGetblindproductsQuery, useGetblindsQuery } from "../redux/api";
import LoadingPage from "../loading_page/loadingpage";
import HelmetData from "../helmet/helmet";
import { Link } from "react-router-dom";

const Blinds_page = () => {
  const features = [
    { icon: <GiKangaroo />, title: "Custom Made In Australia" },
    {
      icon: <GiBorderedShield />,
      title: "All Products 100% ACCC Compliant & Child Safe",
    },
    { icon: <GiLightBulb />, title: "Reduce Your Energy Bills Up To 49%" },
    { icon: <FaAward />, title: "Limited Lifetime Warranty" },
  ];

  const [blinds, setBlinds] = useState([]);
  const [blindsproduct, setBlindsproduct] = useState([]);
  const {
    data: blindsData,
    error: blindsError,
    isLoading: blindsLoading,
  } = useGetblindsQuery();
  const {
    data: blindsproductData,
    error: blindsproductError,
    isLoading: blindsproductLoading,
  } = useGetblindproductsQuery();

  useEffect(() => {
    if (blindsData) {
      setBlinds(blindsData.data);
    }
    if (blindsproductData) {
      setBlindsproduct(blindsproductData.data);
    }
  }, [blindsData, blindsproductData]);

  console.log(blindData);
  const isLoading = blindsLoading || blindsproductLoading;
  const error = blindsError || blindsproductError;

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div>Error Loading Data: {error.message}</div>;
  }
  return (
    <>
      <HelmetData title={"SUNSHINE | BLINDS"} />
      <div className="bg-white">
        <div className="container mx-auto py-3">
          {blinds.map((items, index) => (
            <div key={index} className="mb-16">
              {/* Main text centered at the top */}

              <div className="flex flex-col items-center text-center mb-16 font-subheading text-3xl">
                <h1 className="font-bold text-customColorRgb mb-4">
                  {items.attributes.title1}
                </h1>
                <p className=" text-customColorRgb mb-8 font-subheading text-lg">
                  {items.attributes.title2}
                </p>
              </div>
              <div className="-mt-32 font-subheading text-base">
                <FrontPage
                  imageUrl={`${process.env.STRAPI_API}${items.attributes.img.data.attributes.url}`}
                  title={items.attributes.imgtext1}
                  description={items.attributes.imgtext2}
                  buttonText={items.attributes.buttontext}
                  buttonLink="#"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" font-subheading ">
        {" "}
        <FeatureSection features={features} />
      </div>

      <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 p-0 md:p-10 font-subheading cursor-pointer">
      {blindsproduct.map((item) => (
        <Link
          key={item.id}
          to={`/blinds/${item.attributes.slug}`}
          className="block"
        >
          <BlindsSection
            title={item.attributes.title}
            description={item.attributes.des}
            imageUrl={`${process.env.STRAPI_API}${item.attributes.img.data.attributes.url}`}
            buttonText={item.attributes.buttontext}
            buttonLink={`/blinds/${item.attributes.slug}`}
          />
        </Link>
      ))}
    </div>

      <div className=" font-subheading ">
      <BookingBanner
        title="Book Your Appointment Today and Receive a Free $200 Voucher!"
        description="Our skilled customer consultants are here to assist you in creating the home you’ve always wanted. Book an appointment with our local experts and start your journey to a beautifully transformed space."
        buttonText="BOOK NOW"
        buttonLink="#"
        imageUrl="https://img.freepik.com/premium-photo/female-designer-client-working-with-fabric-samples-selecting-fabrics-design-curtains_116407-8577.jpg"
      />
      </div>
      <div className="mt-10 font-subheading ">
        <BrochureRequestForm />
      </div>

      <div className=" font-subheading ">
        <WindowBlindsSection />
      </div>
      <div className=" ">
        <ChooseTransparency
          title={"Choose Your Transparency"}
          title1={"BLockout"}
          title2={"Light Filter"}
          title3={"Screen"}
          img1={
            "https://luxweb.azureedge.net/assets/luxaflexbrand/media/hunterdouglasmedia/02_products/02%20product%20headers/vertical-blinds.jpg"
          }
          img2={
            "https://images.prismic.io/mrblinds/7449b493-6c60-45bb-8f6d-268ac9ec1d33_vertical-dining-room1.jpg?auto=compress,format"
          }
          img3={
            "https://www.ptblinds.co.uk/wp-content/uploads/2018/06/Perspective-Shale-Grey-Screen-Blind-1.jpg"
          }
        />
      </div>

      <div className=" font-subheading ">
        <Automating />
      </div>

      {/* <div className=" font-subheading ">
        <FAQs />
      </div>

      <div className=" font-subheading text-base ">
        {" "}
        <ClientReviews />
      </div> */}
    </>
  );
};

export default Blinds_page;
