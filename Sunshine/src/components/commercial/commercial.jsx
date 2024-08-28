import React from 'react'
import FrontPage from '../resuable_components/front_page';
import BlindsSection from '../resuable_components/products';
import { commercialData } from './commercial_data';

import WhySunShineComponent from './whysunshine';
import ContactForm from './form';
import ClientReviews from '../reviews/reviews';
import reviewsData from '../reviews/reviews_data';

const Commercial_Page = () => {

  return (
    <>
     <div className="bg-white">
        <div className="container mx-auto py-3">
          {/* Main text centered at the top */}
          <div className="flex flex-col items-center text-center mb-16 font-subheading">
            <h1 className="text-3xl md:text-3xl font-bold text-blue-800 mb-4">
            On-Time & On Budget, A Seamless Process From Start To Finish
            </h1>
            <p className="text-gray-700 mb-8">
            We Do It Once, And We Do It Right.
            </p>
          </div>
          <div className="-mt-32 font-subheading ">
            <FrontPage
              imageUrl="https://watsonblinds.com.au/wp-content/uploads/2018/06/willemsen-group-one-cbr.jpg"
              title="One Canberra Avenue"
              description="3000+ Blinds Fitted For The Willemsen Group."

              buttonText="FIND MORE HERE"
              buttonLink="#"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-0  md:p-10 font-subheading ">
      {commercialData.map((item) => (
        <BlindsSection
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          buttonText={item.buttonText}
          buttonLink={item.buttonLink}
        />
      ))}
    </div>

    <div className=' font-subheading '>

    <WhySunShineComponent/>
    <ContactForm/>
    <ClientReviews reviews={reviewsData}/>
    </div>

    </>
  )
}

export default Commercial_Page