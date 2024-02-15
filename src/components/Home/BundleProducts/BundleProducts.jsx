import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import DynamicProduct from "./DynamicProduct";
import { productData } from "./bundleData";
const BundleProducts = () => {
  return (
    <div className="max-w-[1500px] mx-auto px-5 sm:px-8">
      <div className={`flex border-b-2 my-6 mt-8 items-center justify-between`}>
        <div className="w-fit relative">
          <h1
            className={`py-[5px] text-[18px] font-bold  border-special uppercase`}
          >
            BUNDLE PRODUCTS
          </h1>
          <div
            className={`w-full h-[2px] bg-special bottom-[-2px] absolute`}
          ></div>
        </div>
        <ul className="hidden md:flex gap-6 text-[14px] font-semibold text-primary">
          <li
            className={`hover:text-special flex items-center gap-2 cursor-pointer`}
          >
            See All Bundle Product
            <span>
              <IoMdArrowDropright />
            </span>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 relative gap-7 md:grid-cols-2 lg:grid-cols-4">
        <div
          id=""
          className="absolute z-[999] top-[10px] left-[12px] text-[13px] w-[40px] font-medium text-white h-[40px] bg-special flex items-center justify-center rounded-full"
        >
          Sale
        </div>
        {productData.map((item, index) => (
          <DynamicProduct
            key={index}
            name={item.name}
            url={item.images}
            price={item.price}
            description={item.description}
            discountPrice={item.discountPrice}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default BundleProducts;
