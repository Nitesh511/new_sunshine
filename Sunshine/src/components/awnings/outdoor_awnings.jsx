import React from "react";

export const OutdoorBlindsAwningsPage = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl bg-customColorRgb text-white py-8 px-6 rounded-lg shadow-lg font-subheading ">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Celebrate Every Day with Zipscreen Awnings
        </h1>
        <p className="mb-4 text-center">
          Don’t let the weather dictate your plans for a family gathering.
          Zipscreen Awnings are designed to enhance your outdoor living spaces,
          offering optimal temperature and airflow control. By reducing heat and
          sunlight exposure, these awnings help keep your loved ones comfortable
          and lower your energy bills. Imagine cutting your energy costs in half
          while enjoying a more pleasant environment at home! Improved
          temperature regulation means you’ll rely less on air conditioning, and
          Zipscreen Awnings also provide protection from harmful UV rays. Say
          goodbye to stressful sunny afternoons.
        </p>
        <p className="mb-4 text-center">
          Our Zipscreen Awnings are perfect for a range of settings, from cozy
          patios and balconies to bustling commercial spaces like restaurants.
          Available in a wide selection of fabrics and colors, they can be
          manually operated or fitted with a motorized system for added
          convenience. Let us help you make the most of your outdoor areas and
          enjoy your home to the fullest.
        </p>
      </div>
    </div>
  );
};

export const FabricPart = () => {
  return (
    <>
      <h2 className="text-center text-2xl font-bold ">Fabrics</h2>
      <div className="bg-white p-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-center">
            <img
              src="https://watsonblinds.com.au/wp-content/uploads/2021/08/Awnings.jpg"
              alt="image"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://watsonblinds.com.au/wp-content/uploads/2021/08/Awnings-2.jpg"
              alt="image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="p-8 ">
          <h2 className="text-2xl font-bold mb-4">
            Why We Trust Our Awning Fabrics
          </h2>
          <p className="text-lg mb-4">
            We trust our awning fabrics so much, they come complete with a
            10-year warranty.
          </p>
          <p className="text-lg mb-4">
            We know exactly what we’re dealing with when it comes to Aussie
            weather, so these fabrics have been specifically manufactured to
            face up to any storm that comes your way.
          </p>
          <p className="text-lg mb-4">
            They’re also great for holding their own in the scorching sun, and
            they look phenomenal doing it all the whole time.
          </p>
          <p className="text-lg mb-4">
            Some, like the Folding Arm awnings for instance, even offer custom
            colour options.
          </p>
          <p className="text-lg mb-4">
            Certain types of fabrics are recommended for specific awnings and
            this often depends on the type of awning, as it affects how it can
            withstand the weather.
          </p>
          <p className="text-lg mb-4">
            There are numerous choices of awning fabrics on the market. When
            selecting your fabric keep the following in mind:
          </p>
          <ul className="list-none list-inside space-y-4 text-lg">
            <li>
              <strong>✅ Air flow:</strong> Clear PVC is great for unrestricted
              view and when air flow is not an option. If you’re enclosing a
              verandah or patio, you might still want to have a nice cool breeze
              coming through. If this is required, ensure you select an open
              weave fabric with around 10% openness.
            </li>
            <li>
              <strong>✅ Durability:</strong> When a fabric is used outdoors
              it’s exposed to the elements. Fabrics with DURAGUARD® Fabric
              Protection keeps odours away, protects against the development of
              bacteria, resists stains and stops mildew and fungi build-up.
            </li>
            <li>
              <strong>✅ Colour fastness:</strong> Ensure the fabric you choose
              has excellent fade-resistance to the sun. Any fabric with a
              fade-resistance of 6 or above is advised, and will ensure your
              fabric remains the colour you selected for many years to come.
            </li>
            <li>
              <strong>✅ Privacy and view-through:</strong> There are open and
              closed weave awning fabrics. Consider if you want day or night
              time privacy. An open weave fabric in a dark colour gives
              fantastic view-through in the day, but also allows others to see
              in at night.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
