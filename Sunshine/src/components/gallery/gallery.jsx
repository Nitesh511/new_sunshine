import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Autoplay, Pagination } from 'swiper/modules';

import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/22.mp4";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/66.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/23.mp4";
import img9 from "../../assets/9.jpg";
import img10 from "../../assets/10.jpg";
import img11 from "../../assets/11.jpg";
import img12 from "../../assets/24.mp4";
import img13 from "../../assets/13.jpg";
import img14 from "../../assets/14.jpeg";
import img15 from "../../assets/15.jpeg";
import img16 from "../../assets/25.mp4";
import img17 from "../../assets/17.jpeg";
import img18 from "../../assets/18.jpeg";
import img19 from "../../assets/19.jpeg";
import img20 from "../../assets/20.jpeg";
import video21 from "../../assets/21.mp4"; // Import the video

const Gallery = () => {
  const mediaItems = [
    { src: img1, type: 'image' },
    { src: img2, type: 'image' },
    { src: img3, type: 'video' },
    { src: img4, type: 'image' },
    { src: img5, type: 'image' },
    { src: img6, type: 'image' },
    { src: img7, type: 'image' },
    { src: img8, type: 'video' },
    { src: img9, type: 'image' },
    { src: img10, type: 'image' },
    { src: img11, type: 'image' },
    { src: img12, type: 'video' },
    { src: img13, type: 'image' },
    { src: img14, type: 'image' },
    { src: img15, type: 'image' },
    { src: img16, type: 'video' },
    { src: img17, type: 'image' },
    { src: img18, type: 'image' },
    { src: img19, type: 'image' },
    { src: img20, type: 'image' },
    { src: video21, type: 'video' }, // Add the video with type 'video'
  ];

  return (
    <div className="bg-white">
      <div className='flex flex-col justify-center items-center text-center font-subheading text-4xl font-bold'>
        <h3>Gallery</h3>
      </div>
    
      <div className="max-w-7xl mx-auto py-1 px-4 sm:px-6 lg:px-8 cursor-pointer">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay, Pagination]}
        >
          {mediaItems.map((item, index) => (
            <SwiperSlide key={index} className="p-2">
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              ) : (
                <video
                  src={item.src}
                  muted
                  autoPlay
                  loop
           
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
