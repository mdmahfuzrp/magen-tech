import React from "react";
import Options from "../utils/Options/Optionns";

const SectionHeader = ({ title, options=[], visible=true, small=false, background = false }) => {
  return (
    <div className={`flex border-b-2 my-6 mt-8 ${background && 'border-special'} items-center justify-between`}>
      <div className="w-fit relative">
        <h1
          className={`${
            background && "bg-special rounded-t-md px-2  text-white"
          } py-[5px] ${small ? 'text-[14px] mt-[6px]': 'text-[18px]'} font-bold  border-special uppercase`}
        >
          {title}
        </h1>
        <div className={`w-full h-[2px] bg-special  md:bottom-[-2px] absolute ${background ? 'bottom-[-2px]' : 'bottom-[-3px]'}`}></div>
      </div>
      <ul className="hidden md:flex gap-6 text-[14px] font-semibold text-primary">
        {options.map((item, index) => {
          return (
            <li
              key={index}
              className={`hover:text-special cursor-pointer ${
                index === 0 && "text-special"
              } duration-100`}
            >
              {item}
            </li>
          );
        })}
      </ul>

      <div className="flex md:hidden pb-1">
        <Options options={options} visible={visible} />
      </div>
    </div>
  );
};

export default SectionHeader;
