import React, { useEffect, useState } from "react";
import FrontPage from "../resuable_components/front_page";
import FeatureSection from "../resuable_components/features_section";
import { GiKangaroo } from "react-icons/gi";
import { GiBorderedShield } from "react-icons/gi";
import { GiLightBulb } from "react-icons/gi";
import { FaAward } from "react-icons/fa";
import curtainsdata from "./curtainsdata";
import BlindsSection from "../resuable_components/products";
import BookingBanner from "../booking_banner/booking_banner";
import BrochureRequestForm from "../bourchers_form/bourches_form";
import { CurtainsFeature, Tiebacks } from "./curtains_feature";
import Fearures_part from "./fearures_part";
import ChooseTransparency from "../blinds/transperency";
import FAQs from "../faq/faq";
import ClientReviews from "../reviews/reviews";
import reviewsData from "../reviews/reviews_data";
import { useGetcurtainsproductQuery, useGetcurtainsQuery } from "../redux/api";
import LoadingPage from "../loading_page/loadingpage";
import HelmetData from "../helmet/helmet";
import { Link } from "react-router-dom";
  
const Curtains_Page = () => {
  const [curtain, setCurtain] = useState([]);
  const[curtaindata, setCurtainData]=useState([]);

  const { data:ni, isLoading:te, error:sh } = useGetcurtainsproductQuery();
  const{data:na, isLoading:wa, error:mi}= useGetcurtainsQuery();
  

  useEffect(() => {
    if (ni) {
      setCurtain(ni.data);
    }
    if (na) {
      setCurtainData(na.data);
    }
  },[ni,na]);

  const isLoading= te || wa;
  const error =sh || mi;

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div>Error Loadind Data:{error.message}</div>;
  }
  const features = [
    { icon: <GiKangaroo />, title: "Custom Made In Australia" },
    {
      icon: <GiBorderedShield />,
      title: "All Products 100% ACCC Compliant & Child Safe",
    },
    { icon: <GiLightBulb />, title: "Reduce Your Energy Bills Up To 49%" },
    { icon: <FaAward />, title: "Limited Lifetime Warranty" },
  ];
  return (
    <>
     <HelmetData title={"SUNSHINE | CURTAINS"}/>
   <div className="bg-white">
  <div className="container mx-auto py-3">
    {/* Main text centered at the top */}
    {curtain.map((items) => (
      <React.Fragment key={items.id}>
        <div className="flex flex-col items-center text-center mb-16 font-subheading">
          <h1 className="text-3xl md:text-3xl font-bold text-customColorRgb mb-4">
            {items.attributes.title1}
          </h1>
          <p className=" text-customColorRgb text-lg mb-8 font-bold">{items.attributes.title2}</p>
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

      
      </React.Fragment>
    ))}
  </div>
</div>

      <div className="font-subheading">
        {" "}
        <FeatureSection features={features} />
      </div>

      <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-0 md:p-10 font-subheading cursor-pointer">
        {curtaindata.map((item) => (
          <Link
            key={item.id}
            to={`/curtains/${item.attributes.slug}`}
            className="block"
          >
          <BlindsSection
            key={item.id}
            title={item.attributes.title}
            description={item.attributes.des}
            imageUrl={`${process.env.STRAPI_API}${item.attributes.img.data.attributes.url}`}
            buttonText={item.attributes.buttontext}
            buttonLink={`/curtains/${item.attributes.slug}`}
          />
          </Link>
        ))}
      </div>
      <div className=" font-subheading">
        {" "}
        <BookingBanner
        title="Book Your Appointment Today and Receive a Free $200 Voucher!"
        description="Our skilled customer consultants are here to assist you in creating the home you’ve always wanted. Book an appointment with our local experts and start your journey to a beautifully transformed space."
        buttonText="BOOK NOW"
        buttonLink="#"
        imageUrl="https://img.freepik.com/premium-photo/female-designer-client-working-with-fabric-samples-selecting-fabrics-design-curtains_116407-8577.jpg"
      />
      </div>

      <div className="mt-10 mb-10 font-subheading ">
        {" "}
        <BrochureRequestForm />
      </div>

      <div className="font-subheading">
        {" "}
        <CurtainsFeature />
      </div>

      <div className=" font-subheading ">
        {" "}
        <Fearures_part />
      </div>

      <ChooseTransparency
        title={"Choose Your Pleats"}
        title1={"Double & Triple pinch pleat"}
        title2={"Box pleat"}
        title3={"Pencil pleat"}
        img1={"https://static.hillarys.co.uk/asset/media/38805/hil-curt-header-triple_pinchpleat-folia-sage-1.jpg?cb=20230109102435&mcb=5f884e47a7424cfe86340315ccaafed0"}
        img2={"https://countryblinds.com.au/wp-content/uploads/2021/06/zepel-pinch-pleat.jpg"}
        img3={"https://www.harrycorry.com/media/catalog/product/cache/5d49006cb47e65faaa722154ec2f7208/p/r/prd_4518835_moonlight-silver-edit_4h9ye7qetrp78l4s.jpg"}
      />

      <div className=" font-subheading mt-10 ">
        <Tiebacks />

        {/* <FAQs />

        <ClientReviews reviews={reviewsData} /> */}
      </div>
    </>
  );
};

export default Curtains_Page;
