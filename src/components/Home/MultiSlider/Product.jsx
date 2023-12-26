import React from "react";
import starImg from "../../../assets/images/star.png";
import { FaHeart } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import Countdown from "../../../utils/Countdown/Countdown";
export default function Product(props) {
  return (
    <div className="card relative">
      <div
        id=""
        className="absolute z-[999] top-[10px] left-[12px] text-[13px] w-[40px] font-medium text-white h-[40px] bg-special flex items-center justify-center rounded-full"
      >
        {props.discount}%
      </div>
      <div id="flashSaleHoverParent" className="relative">
        <img
          className="product--image w-full h-ful object-cover"
          src={props.url}
          alt="product image"
        />
        <div id="hoverHide">
          <img src={starImg} className="w-fit mx-auto mb-[6px]" alt="" />
          <h2 className="text-[14px] text-primary font-semibold">
            {props.name.slice(0, 25)}...
          </h2>
        </div>
<div id="hoverButton">
    <div className="text-[12px] uppercase hover:bg-special duration-100 bg-secondary text-white py-2 rounded-full w-fit px-7 mx-auto absolute bottom-[3px] left-[20%]">Add To Cart</div>
</div>
        <div
          id="flashSaleImgHover"
          className="absolute  bg-[#0000002a] top-0 left-0 bottom-[60px] right-0 flex items-center justify-center gap-3"
        >
          <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full">
            <FaHeart />
          </p>
          <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full">
            <BsArrowRepeat />
          </p>
          <p className="text-[16px] hover:text-special text-primary bg-white mt-5 w-[33px] flex items-center justify-center h-[33px] rounded-full">
            <FiSearch />
          </p>
        </div>
      </div>
      <p className="price mt-1 mb-2 text-red-500 font-semibold text-[18px]">
        ${props.price}{" "}
        <del className="text-gray-400 text-[14px] font-medium">
          ${props.discountPrice}
        </del>
      </p>
      <div>
        <Countdown />
      </div>
    </div>
  );
}
