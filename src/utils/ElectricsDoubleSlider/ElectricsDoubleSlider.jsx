"use client";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

import starImg from "../../assets/images/star.png";
import { BsArrowRepeat } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

// custom css
import './DoubleSlider.css'

const ElectricsDoubleSlider = () => {
  const sliderRef = useRef(null);

  const handlePrev = () => {
    console.log("Previous Button Clicked");
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    console.log("Next Button Clicked");
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="h-full relative">
      <Slider
        className="relative mx-auto "
        ref={sliderRef}
        {...settings}
      >
        <div className=" flex flex-col gap-10 ">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white mb-5 col-span-1 w-full slideOverlay p-3 flex flex-col xl:flex-row gap-2">
              <div className="relative p-3 flex items-center justify-center">
                  <img
                    src="http://magento2.magentech.com/themes/sm_shopping/pub/media/catalog/product/cache/e9bcb962a9408957578e6af2c852a0c4/e/l/elec-16_2.jpg"
                    alt=""
                    className="min-w-[180px]"
                  />

                  <div className="absolute bg-[#0000002a] doubleSlideOverlay w-full h-full left-0 right-0 top-0 bottom-0 flex gap-2 justify-center items-center">
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <FaHeart />
                    </p>
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <BsArrowRepeat />
                    </p>
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <FiSearch />
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <img className="w-[60px] ml-[-5px]" src={starImg} alt="" />
                  <p className="text-[14px] font-semibold">
                    HP Elite Computer C2D...
                  </p>
                  <h3 className="text-[18px] font-bold text-special">$1.60</h3>
                  <span className="text-[12px] text-opacity">
                    Dolore eu feugiat nulla facilisis at vero eros et accumsan
                    et iusto odio dignissim qui blandit praes
                  </span>
                  <div>
                    <div className="text-[12px] uppercase hover:bg-special duration-100 bg-secondary text-white py-2 rounded-full w-fit px-7 doubleOverlayBtn my-3 cursor-pointer">
                      Add To Cart
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white mb-5 col-span-1 w-full slideOverlay p-3 flex flex-col xl:flex-row gap-2">
              <div className="relative p-3 flex items-center justify-center">
                  <img
                    src="http://magento2.magentech.com/themes/sm_shopping/pub/media/catalog/product/cache/e9bcb962a9408957578e6af2c852a0c4/e/l/elec-10_3.jpg"
                    alt=""
                    className="min-w-[180px]"
                  />

                  <div className="absolute bg-[#0000002a] doubleSlideOverlay w-full h-full left-0 right-0 top-0 bottom-0 flex gap-2 justify-center items-center">
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <FaHeart />
                    </p>
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <BsArrowRepeat />
                    </p>
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <FiSearch />
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <img className="w-[60px] ml-[-5px]" src={starImg} alt="" />
                  <p className="text-[14px] font-semibold">
                    HP Elite Computer C2D...
                  </p>
                  <h3 className="text-[18px] font-bold text-special">$1.60</h3>
                  <span className="text-[12px] text-opacity">
                    Dolore eu feugiat nulla facilisis at vero eros et accumsan
                    et iusto odio dignissim qui blandit praes
                  </span>
                  <div>
                    <div className="text-[12px] uppercase hover:bg-special duration-100 bg-secondary text-white py-2 rounded-full w-fit px-7 doubleOverlayBtn my-3 cursor-pointer">
                      Add To Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-3">
            <div className="bg-white mb-5 col-span-1 w-full slideOverlay p-3 flex flex-col xl:flex-row gap-2">
                <div className="relative p-3 flex items-center justify-center">
                  <img
                    src="http://magento2.magentech.com/themes/sm_shopping/pub/media/catalog/product/cache/e9bcb962a9408957578e6af2c852a0c4/e/l/elec-8_1.jpg"
                    alt=""
                    className="min-w-[180px]"
                  />

                  <div className="absolute bg-[#0000002a] doubleSlideOverlay w-full h-full left-0 right-0 top-0 bottom-0 flex gap-2 justify-center items-center">
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <FaHeart />
                    </p>
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <BsArrowRepeat />
                    </p>
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <FiSearch />
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <img className="w-[60px] ml-[-5px]" src={starImg} alt="" />
                  <p className="text-[14px] font-semibold">
                    HP Elite Computer C2D...
                  </p>
                  <h3 className="text-[18px] font-bold text-special">$1.60</h3>
                  <span className="text-[12px] text-opacity">
                    Dolore eu feugiat nulla facilisis at vero eros et accumsan
                    et iusto odio dignissim qui blandit praes
                  </span>
                  <div>
                    <div className="text-[12px] uppercase hover:bg-special duration-100 bg-secondary text-white py-2 rounded-full w-fit px-7 doubleOverlayBtn my-3 cursor-pointer">
                      Add To Cart
                    </div>
                  </div>
                </div>
              </div>
             
             
              <div className="bg-white mb-5 col-span-1 w-full slideOverlay p-3 flex flex-col xl:flex-row gap-2">
              <div className="relative p-3 flex items-center justify-center">
                  <img
                    src="http://magento2.magentech.com/themes/sm_shopping/pub/media/catalog/product/cache/e9bcb962a9408957578e6af2c852a0c4/e/l/elec-13_4.jpg"
                    alt=""
                    className="min-w-[180px]"
                  />

                  <div className="absolute bg-[#0000002a] doubleSlideOverlay w-full h-full left-0 right-0 top-0 bottom-0 flex gap-2 justify-center items-center">
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <FaHeart />
                    </p>
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <BsArrowRepeat />
                    </p>
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <FiSearch />
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <img className="w-[60px] ml-[-5px]" src={starImg} alt="" />
                  <p className="text-[14px] font-semibold">
                    HP Elite Computer C2D...
                  </p>
                  <h3 className="text-[18px] font-bold text-special">$1.60</h3>
                  <span className="text-[12px] text-opacity">
                    Dolore eu feugiat nulla facilisis at vero eros et accumsan
                    et iusto odio dignissim qui blandit praes
                  </span>
                  <div>
                    <div className="text-[12px] uppercase hover:bg-special duration-100 bg-secondary text-white py-2 rounded-full w-fit px-7 doubleOverlayBtn my-3 cursor-pointer">
                      Add To Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-3">
            <div className="bg-white mb-5 col-span-1 w-full slideOverlay p-3 flex flex-col xl:flex-row gap-2">
            <div className="relative p-3 flex items-center justify-center">
                  <img
                    src="http://magento2.magentech.com/themes/sm_shopping/pub/media/catalog/product/cache/e9bcb962a9408957578e6af2c852a0c4/e/l/elec-12_4.jpg"
                    alt=""
                    className="min-w-[180px]"
                  />

                  <div className="absolute bg-[#0000002a] doubleSlideOverlay w-full h-full left-0 right-0 top-0 bottom-0 flex gap-2 justify-center items-center">
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <FaHeart />
                    </p>
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <BsArrowRepeat />
                    </p>
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <FiSearch />
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <img className="w-[60px] ml-[-5px]" src={starImg} alt="" />
                  <p className="text-[14px] font-semibold">
                    HP Elite Computer C2D...
                  </p>
                  <h3 className="text-[18px] font-bold text-special">$1.60</h3>
                  <span className="text-[12px] text-opacity">
                    Dolore eu feugiat nulla facilisis at vero eros et accumsan
                    et iusto odio dignissim qui blandit praes
                  </span>
                  <div>
                    <div className="text-[12px] uppercase hover:bg-special duration-100 bg-secondary text-white py-2 rounded-full w-fit px-7 doubleOverlayBtn my-3 cursor-pointer">
                      Add To Cart
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white mb-5 col-span-1 w-full slideOverlay p-3 flex flex-col xl:flex-row gap-2">
              <div className="relative p-3 flex items-center justify-center">
                  <img
                    src="http://magento2.magentech.com/themes/sm_shopping/pub/media/catalog/product/cache/e9bcb962a9408957578e6af2c852a0c4/e/l/elec-19_1.jpg"
                    alt=""
                    className="min-w-[180px]"
                  />

                  <div className="absolute bg-[#0000002a] doubleSlideOverlay w-full h-full left-0 right-0 top-0 bottom-0 flex gap-2 justify-center items-center">
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <FaHeart />
                    </p>
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <BsArrowRepeat />
                    </p>
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <FiSearch />
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <img className="w-[60px] ml-[-5px]" src={starImg} alt="" />
                  <p className="text-[14px] font-semibold">
                    HP Elite Computer C2D...
                  </p>
                  <h3 className="text-[18px] font-bold text-special">$1.60</h3>
                  <span className="text-[12px] text-opacity">
                    Dolore eu feugiat nulla facilisis at vero eros et accumsan
                    et iusto odio dignissim qui blandit praes
                  </span>
                  <div>
                    <div className="text-[12px] uppercase hover:bg-special duration-100 bg-secondary text-white py-2 rounded-full w-fit px-7 doubleOverlayBtn my-3 cursor-pointer">
                      Add To Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-3">
            <div className="bg-white mb-5 col-span-1 w-full slideOverlay p-3 flex flex-col xl:flex-row gap-2">
            <div className="relative p-3 flex items-center justify-center">
                  <img
                    src="http://magento2.magentech.com/themes/sm_shopping/pub/media/catalog/product/cache/e9bcb962a9408957578e6af2c852a0c4/0/5/05_1.jpg"
                    alt=""
                    className="min-w-[180px]"
                  />

                  <div className="absolute bg-[#0000002a] doubleSlideOverlay w-full h-full left-0 right-0 top-0 bottom-0 flex gap-2 justify-center items-center">
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <FaHeart />
                    </p>
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <BsArrowRepeat />
                    </p>
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <FiSearch />
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <img className="w-[60px] ml-[-5px]" src={starImg} alt="" />
                  <p className="text-[14px] font-semibold">
                    HP Elite Computer C2D...
                  </p>
                  <h3 className="text-[18px] font-bold text-special">$1.60</h3>
                  <span className="text-[12px] text-opacity">
                    Dolore eu feugiat nulla facilisis at vero eros et accumsan
                    et iusto odio dignissim qui blandit praes
                  </span>
                  <div>
                    <div className="text-[12px] uppercase hover:bg-special duration-100 bg-secondary text-white py-2 rounded-full w-fit px-7 doubleOverlayBtn my-3 cursor-pointer">
                      Add To Cart
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white mb-5 col-span-1 w-full slideOverlay p-3 flex flex-col xl:flex-row gap-2">
              <div className="relative p-3 flex items-center justify-center">
                  <img
                    src="http://magento2.magentech.com/themes/sm_shopping/pub/media/catalog/product/cache/e9bcb962a9408957578e6af2c852a0c4/e/l/elec-10_3.jpg"
                    alt=""
                    className="min-w-[180px]"
                  />

                  <div className="absolute bg-[#0000002a] doubleSlideOverlay w-full h-full left-0 right-0 top-0 bottom-0 flex gap-2 justify-center items-center">
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <FaHeart />
                    </p>
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <BsArrowRepeat />
                    </p>
                    <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full cursor-pointer">
                      <FiSearch />
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <img className="w-[60px] ml-[-5px]" src={starImg} alt="" />
                  <p className="text-[14px] font-semibold">
                    HP Elite Computer C2D...
                  </p>
                  <h3 className="text-[18px] font-bold text-special">$1.60</h3>
                  <span className="text-[12px] text-opacity">
                    Dolore eu feugiat nulla facilisis at vero eros et accumsan
                    et iusto odio dignissim qui blandit praes
                  </span>
                  <div>
                    <div className="text-[12px] uppercase hover:bg-special duration-100 bg-secondary text-white py-2 rounded-full w-fit px-7 doubleOverlayBtn my-3 cursor-pointer">
                      Add To Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>

      <div className="absolute left-0 top-[46%] xl:top-[42.5%]  w-full h-[55px] flex justify-between items-center">
        <div className="flex w-full justify-between items-center">
          <span
            onClick={handlePrev}
            className="bg-white  w-[45px] h-[45px] rounded-full shadow-md border border-slate-100 hover:border-special flex justify-center items-center hover:bg-special group duration-300 cursor-pointer z-[10]"
          >
            <IoIosArrowBack className="text-gray-400 text-[18px] group-hover:text-white" />
          </span>

          <span className="h-[1px] border-gray-300 border-b-[1px] w-full absolute z-[1]"></span>

          <span
            onClick={handleNext}
            className="bg-white w-[45px] h-[45px] rounded-full shadow-md border border-slate-100 hover:border-special flex justify-center items-center hover:bg-special group duration-300 cursor-pointer z-[10]"
          >
            <MdOutlineArrowForwardIos className="text-gray-400 text-[18px] group-hover:text-white" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ElectricsDoubleSlider;
