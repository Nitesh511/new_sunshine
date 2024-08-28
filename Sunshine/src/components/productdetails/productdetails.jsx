import React, { useEffect, useState } from "react";
import FrontPage from "../resuable_components/front_page";
import FeatureSection from "../resuable_components/features_section";
import { GiKangaroo, GiBorderedShield, GiLightBulb } from "react-icons/gi";
import { FaAward } from "react-icons/fa";
import { useGetawningsproductdetailsQuery, useGetblindproductdetailsQuery, useGetcurtainproductdetailsQuery, useGetshutterproductdetailsQuery } from "../redux/api";
import LoadingPage from "../loading_page/loadingpage";
import { useParams } from "react-router-dom";
import {
  GettingToKnowMotorisedBlinds,
  MotorisedBlindsLayout,
  Wheredoyouuse,
} from "./gettingtoknow";
import FAQs from "../faq/faq";
import ClientReviews from "../reviews/reviews";
import BrochureRequestForm from "../bourchers_form/bourches_form";
import BookingBanner from "../booking_banner/booking_banner";

const Productdetails = () => {

  const { slug } = useParams();

  const [productdetails, setProductDetails] = useState([]);
  const [curtaindata, setCurtainData] = useState([]);
  const [shutterdata, setShutterData] = useState([]);
  const [awningdata, setAwningData] = useState([]);

  const { data: blind, isLoading: blindLoading, error: blindError } = useGetblindproductdetailsQuery(slug);
  const { data: curtain, isLoading: curtainLoading, error: curtainError } = useGetcurtainproductdetailsQuery(slug);
  const { data: shutter, isLoading: shutterLoading, error: shutterError } = useGetshutterproductdetailsQuery(slug);
  const {data:awning, isLoading:awningLoading, error:awningerror}= useGetawningsproductdetailsQuery(slug);

  useEffect(() => {
    if (blind && blind.data) {
      setProductDetails(blind.data);
    }
    if (curtain && curtain.data) {
      setCurtainData(curtain.data);
    }
    if (shutter && shutter.data) {
      setShutterData(shutter.data);
    }
    if (awning && awning.data) {
      setAwningData(awning.data);
    }
  }, [blind, curtain,shutter,awning]);

  const isLoading = blindLoading || curtainLoading || shutterLoading|| awningLoading;
  const error = blindError || curtainError || shutterError || awningerror;


  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div>Error Fetching Data: {error.message}</div>;
  }

  const features = [
    { icon: <GiKangaroo />, title: "Custom Made In Australia" },
    { icon: <GiBorderedShield />, title: "All Products 100% ACCC Compliant & Child Safe" },
    { icon: <GiLightBulb />, title: "Reduce Your Energy Bills Up To 49%" },
    { icon: <FaAward />, title: "Limited Lifetime Warranty" },
  ];

  /* ╔════════════════════════════════════════════════════════╗
      ║Decide which data to use for rendering if the
      product length is true then show product details other
      wise how curtain data                  ║
      ╚════════════════════════════════════════════════════════╝ */
      const dataToRender = productdetails.length > 0 ? productdetails : 
      (curtaindata.length > 0 ? curtaindata : 
      (shutterdata.length > 0 ? shutterdata : awningdata));



  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto py-3">
          {dataToRender.map((items) => (
            <React.Fragment key={items.id}>
              <div className="flex flex-col items-center text-center mb-16">
                <h1 className="text-3xl md:text-4xl font-bold text-customColorRgb mb-4">
                  {items?.attributes?.productdetails.title1}
                </h1>
                <p className=" text-customColorRgb mb-8 text-lg">
                  {items.attributes.productdetails.title2}
                </p>
              </div>
              <div className="-mt-32">
                <FrontPage
                  imageUrl={`${process.env.STRAPI_API}${items.attributes.img.data.attributes.url}`}
                  title={items.attributes.productdetails.imgtext1}
                  description={items.attributes.productdetails.imgtext2}
                  buttonText={items.attributes.productdetails.buttontext}
                  buttonLink="#"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <FeatureSection features={features} />

      <div>
        {dataToRender.map((items) => (
          <React.Fragment key={items.id}>
            <GettingToKnowMotorisedBlinds
              title={items.attributes.productdetails.title3}
              description={
                <span
                  dangerouslySetInnerHTML={{
                    __html: items.attributes.productdetails.des
                    .replace(/\n+/g, '<br><br>')  
                    
                  }}
                />
              }
            />
            <MotorisedBlindsLayout
              image1={`${process.env.STRAPI_API}${items.attributes.img1.data.attributes.url}`}
              image2={`${process.env.STRAPI_API}${items.attributes.img2.data.attributes.url}`}
            />
            <Wheredoyouuse
              title={items.attributes.productdetails.title4}
              title2={items.attributes.productdetails.title5}
              description={items.attributes.productdetails.des2}
            />
          </React.Fragment>
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
      {/* <FAQs />
      <ClientReviews /> */}
    </>
  );
};

export default Productdetails;
