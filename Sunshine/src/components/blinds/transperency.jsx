import React from 'react';

const ChooseTransparency = ({title,title1, title2, title3, img1, img2, img3}) => {
  return (
    <div className="bg-white p-8 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-8 text-center">
        <div className=" bg-customColorRgb text-white font-bold py-2 rounded-lg">
        {title1}
        </div>
        <div className="bg-customColorRgb text-white font-bold py-2 rounded-lg">
        {title2}
        </div>
        <div className="bg-customColorRgb text-white font-bold py-2 rounded-lg">
        {title3}
        </div>
        <div className='-mt-6'>
          <img src={img1} alt="Blockout" className="rounded-lg" style={{height:"340px"}} />
        </div>
        <div className='-mt-6'> 
          <img src={img2} alt="Light Filter" className="rounded-lg"  style={{height:"340px"}} />
        </div>
        <div className='-mt-6'>
          <img src={img3} alt="Screen" className="rounded-lg" style={{height:"340px"}} />
        </div>
      </div>
    </div>
  );
};

export default ChooseTransparency;