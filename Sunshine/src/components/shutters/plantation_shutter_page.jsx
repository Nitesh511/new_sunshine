import React from "react";


const plantationShuttersData = [
  {
    id: "1",
    title: "Plantation Shutters - Timber and PVC",
    description: `Give your indoor space an instant makeover with our internal shutters.

Available in both timber and PVC finishes, their raw beauty, practicality, and strength will never date, creating a modern yet timeless option for your windows.

Not only are shutters fantastic for amping up that curb appeal, but they also do more than just look pretty.

Most Australian homes have single-glazed windows, so a bit of extra help with insulation is a good idea. Plantation blinds and shutters do a great job of keeping the heat in or out. In turn, they can help lower your power bills, no matter what the weather is like outside.

Along with being excellent energy-savers, they help you manage harsh sunlight. So you can also protect your interiors, like floors and furnishings.

Best of all, they can now also be used in more expansive spaces, such as sliding doors.`,
    imageUrl:
      "https://watsonblinds.com.au/wp-content/uploads/2024/04/Untitled-1-1-1536x729.jpg",
    buttonText: "View Plantation Shutters",
    buttonLink: "#",
  },
  {
    id: "2",
    title: "Timber Shutters",
    description: `Timber shutters get a special mention for being one of the most sophisticated internal window coverings in modern-day interior designing.

Custom-made to suit your home, we have shutters available in a range of shapes and styles.

We use premium quality hardwood for our timber shutters which is well-known for its sturdy longevity. It also gives timber shutters a regal, sophisticated personality, making them ideal for bedrooms, living rooms, dining areas, and home office/study spaces.`,
    imageUrl:
      "https://watsonblinds.com.au/wp-content/uploads/2015/01/Aluminium-Shutter-High-Res-13.jpg",
    buttonText: "View Timber Shutters",
    buttonLink: "#",
  },
  {
    id: "3",
    title: "Premium Wood-Look Shutters",
    description: `If you want to extend this look throughout your home, you should also consider looking into premium wood-look shutters which are made from hardy and durable PVC.

They’re especially suited for areas susceptible to water and moisture, like kitchens or bathrooms because they’re not affected the same way timber is with water over time.

Exterior facing windows are also suitable candidates for PVC shutters.

The variety of colours available for plantation shutters includes multiple shades of white, cream, grey, and stained wood. Plenty to choose from!`,
    imageUrl:
      "https://watsonblinds.com.au/wp-content/uploads/2015/01/CW-Products-Loc4-049A_rev_frontcover.jpg",
    buttonText: "View Premium Wood-Look Shutters",
    buttonLink: "#",
  },
];

const PlantationShuttersPage = () => {
  return (
    <div className="container mx-auto p-6 md:p-20 -mt-20">
      <h1 className="text-3xl font-bold text-center mb-6">
        Plantation Shutters
      </h1>
      {plantationShuttersData.map((item) => (
        <div
          key={item.id}
          className="mb-8 flex flex-col md:flex-row items-center"
        >
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-64 object-cover rounded-lg shadow-md" // Fixed height
            />
          </div>
          <div className="md:w-1/2 md:pl-6">
            <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
            <p className="text-gray-700 mb-4">{item.description}</p>
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlantationShuttersPage;
