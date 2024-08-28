import React from "react";
import frontimg from "../../assets/curtainback.svg";


export const WindowBlindsSection = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${frontimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    
      }}
    >

      <div className="bg-transparent p-8 max-w-5xl mx-auto block">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Window Blinds For Every Reason And Season
        </h2>

        <p className="text-gray-600 mb-6">
          Home is where the heart is as they say. And you want your home to be a
          little slice of paradise you can just melt into after a hard day.
        </p>

        <p className="text-gray-600 mb-6">
          Isn't it the absolute worst when you're happily settling in for a
          weekend Netflix marathon complete with snacks, only to have them get all
          soggy and cold because you're busy fixing that screen glare?
        </p>

        <p className="text-gray-600 mb-6">
          Or maybe you're just over having to crank up that air-con every time the
          weather decides to flip. If you didn't know any better, you'd think your
          home was bi-polar.
        </p>

        <p className="text-gray-600 mb-6">
          Did you know that over 30% of the air lost in a home - both in winter
          and summer - escapes through your windows?
        </p>

        <p className="text-gray-600 mb-6">
          Glass windows are poor insulators, and without a proper window
          furnishing, you could be paying 30% more on your energy bills than you
          need to.
        </p>

        <p className="text-gray-600 mb-6">So what gives?</p>

        <p className="text-gray-600 mb-6">
          The right window blinds can make a world of a difference. Banish those
          pesky insulation and glare issues with a simple solution once and for
          all, exclusively set up for your unique needs.
        </p>

        <h3 className="text-xl font-bold mb-4">Why Sunshine Blinds?</h3>

        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Custom-made locally in our own factory</li>
          <li>The region's only local servicing team</li>
          <li>Widest range of colours, styles and fabrics</li>
          <li>Lifetime warranty on all products manufactured in-house</li>
          <li>Unmatched pricing for the quality produced</li>
          {/* <li>Over 50 years experience manufacturing window blinds</li> */}
        </ul>
      </div>
    </div>
  );
};


export const Automating = () => {
  return (
    <div className="bg-white p-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Automating Your Window Blinds
      </h2>

      <p className="text-gray-600 mb-6">
        Modern, 21st-century humans are creatures of convenience and comfort.
        There’s very little we do now that doesn’t involve some form of
        technology. Naturally, this includes how you operate your window blinds.
      </p>

      <p className="text-gray-600 mb-6">
        In this world of smart homes and smart phones, there’s not much smart
        humans can’t achieve. So if you’re tired of constantly having to raise
        and lower your blinds manually several hundred times a day, automating
        them could be your saving grace.
      </p>

      <p className="text-gray-600 mb-6">
        Your window blinds can either be chain-operated or motorised. Both are
        100% child safe, as our blinds are always designed with child safety in
        mind.
      </p>

      <p className="text-gray-600 mb-6">
        We offer an innovative range of motorised blind options that can be
        connected to your smart home and be controlled by your voice or mobile
        phone.
      </p>

      <h3 className="text-xl font-bold mb-4 ">Features</h3>

      <ul className="list-disc list-inside text-gray-600 mb-6 ">
        <li>Custom-made locally in our own factory</li>
        <li>The region's only local servicing team</li>
        <li>Widest range of colours, styles and fabrics</li>
        <li>Lifetime warranty on all products manufactured in-house</li>
        <li>Unmatched pricing for the quality produced</li>
        {/* <li>Over 50 years experience manufacturing window blinds</li> */}
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center justify-center">
          <img
            src="https://bestcurtainsuae.com/wp-content/uploads/2024/03/automated-blinds-1.webp"
            alt="image"
            className="w-full h-72 object-cover "
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://callistusblinds.com/wp-content/uploads/2020/08/day-night-automation.jpg"
            alt="image"
            className="w-full h-72 object-cover"
          />
        </div>
      </div>
    </div>
  );
};
