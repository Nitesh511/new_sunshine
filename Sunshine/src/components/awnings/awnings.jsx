import React, { useEffect, useState } from "react";
import FrontPage from "../resuable_components/front_page";
import FeatureSection from "../resuable_components/features_section";
import { GiKangaroo } from "react-icons/gi";
import { GiHeatHaze } from "react-icons/gi";
import { CiRuler } from "react-icons/ci";
import { FaAward } from "react-icons/fa";
import { OutdoorBlindsAwningsPage, FabricPart } from "./outdoor_awnings";
import BlindsSection from "../resuable_components/products";
import { awningsData } from "./awnings_data";
import BookingBanner from "../booking_banner/booking_banner";
import OutdoorSpacesComponent from "./outdoor_space";
import ChooseTransparency from "../blinds/transperency";
import FAQs from "../faq/faq";
import ClientReviews from "../reviews/reviews";
import reviewsData from "../reviews/reviews_data";
import { useGetawningproductsQuery, useGetawningsQuery } from "../redux/api";
import LoadingPage from "../loading_page/loadingpage";
import HelmetData from "../helmet/helmet";
import { Link } from "react-router-dom";

const Awnings_Page = () => {
  const [awning, setAwning] = useState([]);
  const [awningproducts, setAwningProduct] = useState([]);
  const {
    data: awningdata,
    isLoading: awningloading,
    error: awningerror,
  } = useGetawningsQuery();
  const {
    data: awningproduct,
    isLoading: awningproductloading,
    error: awningproducterror,
  } = useGetawningproductsQuery();

  useEffect(() => {
    if (awningdata) {
      setAwning(awningdata.data);
    }
    if (awningproduct) {
      setAwningProduct(awningproduct.data);
    }
  }, [awningdata, awningproduct]);

  const isLoading = awningloading || awningproductloading;
  const error = awningerror || awningproducterror;

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div> Error Fetching data:{error.message}</div>;
  }
  const features = [
    { icon: <GiKangaroo />, title: "Custom Made In Australia" },
    { icon: <GiHeatHaze />, title: "Sun And Heat Protection" },
    { icon: <CiRuler />, title: "Free Expert Measure And Installation" },
    { icon: <FaAward />, title: "Limited Lifetime Warranty" },
  ];
  return (
    <>
     <HelmetData title={"SUNSHINE | AWNINGS"}/>
      <div className="bg-white">
        <div className="container mx-auto py-3">
          {/* Main text centered at the top */}
          {awning.length > 0 ? (
            awning.map((items) => (
              <React.Fragment key={items.id}>
                <div className="flex flex-col items-center text-center mb-16 font-subheading">
                  <h1 className="text-3xl md:text-3xl font-bold text-customColorRgb mb-4">
                    {items.attributes.title1}
                  </h1>
                  <p className=" text-customColorRgb text-lg font-bold mb-8">
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
              </React.Fragment>
            ))
          ) : (
            <p>No awnings available</p>
          )}
        </div>
      </div>
      <div className=" font-subheading ">
        <FeatureSection features={features} />

        <OutdoorBlindsAwningsPage />

        {/* <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-0 md:p-10 font-subheading cursor-pointer">
          {awningproducts.map((item) => (
            <Link
            key={item.id}
            to={`/awnings/${item.attributes.slug}`}
            className="block"
          >
            <BlindsSection
              key={item.id}
              title={item.attributes.title}
              description={item.attributes.des}
              imageUrl={`${process.env.STRAPI_API}${item.attributes.img.data.attributes.url}`}
              buttonText={item.attributes.buttontext}
              buttonLink={`/awnings/${item.attributes.slug}`}
            />
            </Link>
          ))}
        </div> */}

        <BookingBanner
        title="Book Your Appointment Today and Receive a Free $200 Voucher!"
        description="Our skilled customer consultants are here to assist you in creating the home you’ve always wanted. Book an appointment with our local experts and start your journey to a beautifully transformed space."
        buttonText="BOOK NOW"
        buttonLink="#"
        imageUrl="https://img.freepik.com/premium-photo/female-designer-client-working-with-fabric-samples-selecting-fabrics-design-curtains_116407-8577.jpg"
      />
  
        <OutdoorSpacesComponent />
      </div>

      {/* <ChooseTransparency
        title={"Choose Your Transparency"}
        title1={"ALPHA SRS"}
        title2={"SEMINA"}
        title3={"CASSITA II"}
        img1={
          "https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/SRS-scaled-awnings-q78hps5b9usfv6rvoedgio6hthsctsf5jwul8ya6xs.jpeg"
        }
        img2={
          "https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/semina-life-full-cassette-awnings-q78kgfbkhxtq9zhlo1dz6s1y37l2ma12g5j0cc0ty8.jpeg"
        }
        img3={
          "https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/green-awnings-q78kh1vp1yom0mku0b50umd0cghvr0imj96nuz3dsw.jpeg  "
        }
      />
      <div className="-mt-16">
        <ChooseTransparency
          title1={"PLAZA VIVA"}
          title2={"SINTESI RETRACTABLE ROOF"}
          title3={"SUNDREAM"}
          img1={
            "https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/Plaza-Viva-awnings-q78khvyj4ntsc5d54o532errcsdmlbu1be277tus9s.jpeg"
          }
          img2={
            "https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/outside-awnings-e1709795294201-qkum8s40spt4lsz7aw1rpwo1al224pao6uqtt6gqe8.jpeg"
          }
          img3={
            "https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/grey-awnings-q78klb3dzyicl2ea5nd7n1p569iploevgbit32s7mo.jpeg"
          }
        />
      </div>
      <div className="-mt-16">
        <ChooseTransparency
          title1={"ZIPSCREENS"}
          title2={"WINDOW AWNINGS"}
          title3={"FOLDING ARM"}
          img1={
            "https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/EXTSUITEZ-awnings-q78kohrp5qvbxhrpk0xp38rdn9thor24k341mu26jk.jpeg"
          }
          img2={
            "https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/pivot-arm-awnings-q78kp836h3vcykphacb9124aa27ro9ylzpdn2kz5pc.jpeg"
          }
          img3={
            "https://watsonblinds.com.au/wp-content/uploads/elementor/thumbs/Docril-Photo-awnings-q78kppy42yjt35zje215ufm1kdrqqixie5rv6u8of4.jpeg"
          }
        />
      </div> */}

      <div className=" font-subheading ">
        {/* <FabricPart /> */}

        {/* <FAQs />

        <ClientReviews reviews={reviewsData} /> */}
      </div>
    </>
  );
};

export default Awnings_Page;
