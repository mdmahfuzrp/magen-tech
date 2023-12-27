import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";

// custom css
import "./Electronic.css";

import starImg from '../../../assets/images/star.png'

export default function ElectronicsProduct() {
  return (
    <div id="electronics">
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper grid grid-cols-2"
      >
      <SwiperSlide>
        <div className="card relative">
          <div
            id=""
            className="absolute z-[999] top-[10px] left-[12px] text-[13px] w-[40px] font-medium text-white h-[40px] bg-special flex items-center justify-center rounded-full"
          >
            5%
          </div>
          <div id="flashSaleHoverParent" className="relative">
            <img
              className="product--image w-full h-ful object-cover"
              src={starImg}
              alt="product image"
            />
            <div id="hoverHide">
              <img src={starImg} className="w-fit mx-auto mb-[6px]" alt="" />
              <h2 className="text-[14px] text-primary font-semibold">
                asdf
              </h2>
            </div>
            <div id="hoverButton">
              <div className="text-[12px] uppercase hover:bg-special duration-100 bg-secondary text-white py-2 rounded-full w-fit px-7 mx-auto absolute bottom-[3px] left-[20%]">
                Add To Cart
              </div>
            </div>
            <div
              id="flashSaleImgHover"
              className="absolute  bg-[#0000002a] top-0 left-0 bottom-[60px] right-0 flex items-center justify-center gap-3"
            >
              <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full">
                a
              </p>
              <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full">
                asdf
              </p>
              <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full">
                dsf
              </p>
            </div>
          </div>
          <p className="price mt-1 mb-2 text-red-500 font-semibold text-[18px]">
            asdf
            <del className="text-gray-400 text-[14px] font-medium">
              $asf
            </del>
          </p>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className="card relative">
          <div
            id=""
            className="absolute z-[999] top-[10px] left-[12px] text-[13px] w-[40px] font-medium text-white h-[40px] bg-special flex items-center justify-center rounded-full"
          >
            5%
          </div>
          <div id="flashSaleHoverParent" className="relative">
            <img
              className="product--image w-full h-ful object-cover"
              src={starImg}
              alt="product image"
            />
            <div id="hoverHide">
              <img src={starImg} className="w-fit mx-auto mb-[6px]" alt="" />
              <h2 className="text-[14px] text-primary font-semibold">
                asdf
              </h2>
            </div>
            <div id="hoverButton">
              <div className="text-[12px] uppercase hover:bg-special duration-100 bg-secondary text-white py-2 rounded-full w-fit px-7 mx-auto absolute bottom-[3px] left-[20%]">
                Add To Cart
              </div>
            </div>
            <div
              id="flashSaleImgHover"
              className="absolute  bg-[#0000002a] top-0 left-0 bottom-[60px] right-0 flex items-center justify-center gap-3"
            >
              <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full">
                a
              </p>
              <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full">
                asdf
              </p>
              <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full">
                dsf
              </p>
            </div>
          </div>
          <p className="price mt-1 mb-2 text-red-500 font-semibold text-[18px]">
            asdf
            <del className="text-gray-400 text-[14px] font-medium">
              $asf
            </del>
          </p>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
          <div className="card relative">
            <div
              id=""
              className="absolute z-[999] top-[10px] left-[12px] text-[13px] w-[40px] font-medium text-white h-[40px] bg-special flex items-center justify-center rounded-full"
            >
              5%
            </div>
            <div id="flashSaleHoverParent" className="relative">
              <img
                className="product--image w-full h-ful object-cover"
                src={starImg}
                alt="product image"
              />
              <div id="hoverHide">
                <img src={starImg} className="w-fit mx-auto mb-[6px]" alt="" />
                <h2 className="text-[14px] text-primary font-semibold">
                  asdf
                </h2>
              </div>
              <div id="hoverButton">
                <div className="text-[12px] uppercase hover:bg-special duration-100 bg-secondary text-white py-2 rounded-full w-fit px-7 mx-auto absolute bottom-[3px] left-[20%]">
                  Add To Cart
                </div>
              </div>
              <div
                id="flashSaleImgHover"
                className="absolute  bg-[#0000002a] top-0 left-0 bottom-[60px] right-0 flex items-center justify-center gap-3"
              >
                <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full">
                  a
                </p>
                <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full">
                  asdf
                </p>
                <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full">
                  dsf
                </p>
              </div>
            </div>
            <p className="price mt-1 mb-2 text-red-500 font-semibold text-[18px]">
              asdf
              <del className="text-gray-400 text-[14px] font-medium">
                $asf
              </del>
            </p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="card relative">
            <div
              id=""
              className="absolute z-[999] top-[10px] left-[12px] text-[13px] w-[40px] font-medium text-white h-[40px] bg-special flex items-center justify-center rounded-full"
            >
              5%
            </div>
            <div id="flashSaleHoverParent" className="relative">
              <img
                className="product--image w-full h-ful object-cover"
                src={starImg}
                alt="product image"
              />
              <div id="hoverHide">
                <img src={starImg} className="w-fit mx-auto mb-[6px]" alt="" />
                <h2 className="text-[14px] text-primary font-semibold">
                  asdf
                </h2>
              </div>
              <div id="hoverButton">
                <div className="text-[12px] uppercase hover:bg-special duration-100 bg-secondary text-white py-2 rounded-full w-fit px-7 mx-auto absolute bottom-[3px] left-[20%]">
                  Add To Cart
                </div>
              </div>
              <div
                id="flashSaleImgHover"
                className="absolute  bg-[#0000002a] top-0 left-0 bottom-[60px] right-0 flex items-center justify-center gap-3"
              >
                <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full">
                  a
                </p>
                <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full">
                  asdf
                </p>
                <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full">
                  dsf
                </p>
              </div>
            </div>
            <p className="price mt-1 mb-2 text-red-500 font-semibold text-[18px]">
              asdf
              <del className="text-gray-400 text-[14px] font-medium">
                $asf
              </del>
            </p>
          </div>
        </SwiperSlide>

        
      </Swiper>
    </div>
  );
}
