import React, { useState } from "react";
import starImg from "../../../assets/images/star.png";
import { FaHeart } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import './DynamicProduct.css';
export default function DynamicProduct(props) {
  const [selectedImg, setSelectedImg] = useState([0]);

  const handleChangeSelectedImg = (index) => {
    console.log(index);
    setSelectedImg(index);
  };
  return (
    <div id="dynamicCard" className="dynamicCard relative ">
      <div id="flashSaleHoverParent" className="relative border cursor-pointer">
        <img
          className="product--image w-full h-ful object-cover"
          src={props?.url[selectedImg]}
          alt="product image"
        />
        <div className="flex items-center justify-center gap-2 mt-3 mb-3">
          {props?.url?.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => handleChangeSelectedImg(index)}
              className="w-[65px] cursor-pointer h-[65px] border"
              alt=""
            />
          ))}
        </div>
        
        <div
          id="flashSaleImgHover"
          className="absolute  bg-[#0000002a] top-0 left-0 bottom-[89px] right-0 flex items-center justify-center gap-3"
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
      <div
          id="dynamicHoverHide"
          className="flex items-center justify-center flex-col mt-5"
        >
          <h2 className="text-[14px] text-primary font-semibold">
            {props.name.slice(0, 25)}...
          </h2>

          <img src={starImg} className="w-fit mx-auto" alt="" />
        </div>
        <div id="dynamicHoverButton">
          <div className="text-[12px] cursor-pointer uppercase hover:bg-special duration-100 bg-secondary text-white py-2 rounded-full w-fit px-7 mx-auto absolute bottom-[50px] left-[37%] lg:left-[30%]">
            Add To Cart
          </div>
        </div>
      <p className="price flex items-center justify-center mb-2 text-red-500 font-semibold text-[18px]">
        ${props.price}{" "}
      </p>
    </div>
  );
}
