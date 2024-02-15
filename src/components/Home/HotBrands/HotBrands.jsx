import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import SectionHeader from "../../../SharedComponents/SectionHeader";

const allBrands = [
  "http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/brand/brand-1.jpg",
  "http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/brand/brand-2.jpg",
  "http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/brand/brand-3.jpg",
  "http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/brand/brand-4.jpg",
  "http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/brand/brand-5.jpg",
  "http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/brand/brand-6.jpg",
  "http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/brand/brand-1.jpg",
  "http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/brand/brand-3.jpg",
];
const HotBrands = () => {
    const options = [];
    const hello = () =>{
      console.log("hello")
    }
  return (
    <div className="max-w-[1500px] mx-auto px-5 sm:px-8">
      <SectionHeader options={options} title="hot brands" />

      <div id="hotBrands" className="border-l-0 border max-h-[110px]
      ">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
          loop={true}
          className="mySwiper"
        >
          {allBrands.map((item, index) => (
            <SwiperSlide key={index}>
                <div className="border h-full border-r-0 border-b w-full border-t-0">
              <img src={item} alt="" className="w-full h-full  max-h-[110px] object-cover" />

                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HotBrands;
