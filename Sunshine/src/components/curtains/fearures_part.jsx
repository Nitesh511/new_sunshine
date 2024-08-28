import React from "react";
import frontimg from "../../assets/Curtains.svg";

const FeaturesPart = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${frontimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
     
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-2xl font-bold mb-4">
            Choose Your Style
          </h2>
          <p className="text-gray-700 mb-6">
            You’d be forgiven for thinking curtains weren’t the most exciting
            option for interior decorating. In our opinion, they’re incredibly
            versatile and perfect for that warm, comforting feeling of ‘home’.
            <br></br>
            <br></br>
            Personalise your curtains just the way you want. Choosing your style
            includes picking a type of pleat, tracks, banding/trims, fabrics,
            and tiebacks. If all that just sounded foreign to you, no need to
            stress. We’re right here to walk you through it all.
          </p>

          <h2 className="text-center text-2xl font-bold mb-4">
            Choose Your Pleats (Headings)
          </h2>
          <p className="text-gray-700 mb-6">
            Curtain pleats are fabric folds sewn into the top portion of
            curtains or draperies, serving both a functional and aesthetic
            purpose in interior design.
            <br></br>
            <br></br>
            Functionally, pleats help control the way fabric falls and hangs,
            allowing curtains to open and close smoothly while maintaining their
            shape and fullness. This makes them ideal for controlling light,
            privacy, and airflow in a room.
            <br></br>
            <br></br>
            Aesthetically, pleats add visual interest and texture to window
            furnishings, enhancing the overall look and feel of a space.
            <br></br>
            <br></br>
            Whether creating a tailored and structured appearance with classic
            pleat styles like pinch pleats or box pleats, or achieving a more
            relaxed and casual vibe with options like pencil pleats or S-folds,
            curtain pleats offer versatility in design to complement any decor
            style.
          </p>
        </div>
    
    </div>
  );
};

export default FeaturesPart;
