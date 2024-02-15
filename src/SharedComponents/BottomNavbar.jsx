import { IoIosArrowDown } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { GiWashingMachine } from "react-icons/gi";
import newIcon from '../assets/images/new-icon.png'
import hotIcon from '../assets/images/hot-icon.png'
import {FaSquarePhone } from 'react-icons/fa6';

const BottomNavbar = () => {
  return (
    <div className="max-w-[1500px] mx-auto mt-7 hidden md:flex items-center justify-between px-6 lg:px-8 gap-2">
      <div id="categories" className="w-[250px] lg:w-[220px] cursor-pointer duration-200 relative p-2 px-4 bg-slate-50 border rounded-[3px]">
        <div className="flex items-center w-full gap-1 justify-between">
          <div className="flex items-center gap-1">
            <TiThMenu className="text-special" />
            <p className="font-semibold mt-[2px] text-[14px]">ALL DEPARTMENT</p>
          </div>
          <IoIosArrowDown />
        </div>

        <ul id="category-items" className="absolute z-[99] duration-200 hidden opacity-0 left-[-1px] border border-t-2 border-t-special right-[-1px] top-[58px] bg-white">
          <li className="flex border-l-[2px] border-transparent hover:border-special cursor-pointer py-[10px] px-4 hover:text-special text-opacity items-center gap-1">
            <GiWashingMachine size={15} className="text-gray-500" />
            <p className="text-[13px] font-medium">Electronics</p>
          </li>
          <li className="flex border-l-[2px] border-transparent hover:border-special cursor-pointer py-[10px] px-4 hover:text-special text-opacity items-center gap-1">
            <GiWashingMachine size={15} className="text-gray-500" />
            <p className="text-[13px] font-medium">Electronics</p>
          </li>
          <li className="flex border-l-[2px] border-transparent hover:border-special cursor-pointer py-[10px] px-4 hover:text-special text-opacity items-center gap-1">
            <GiWashingMachine size={15} className="text-gray-500" />
            <p className="text-[13px] font-medium">Electronics</p>
          </li>
          <li className="flex border-l-[2px] border-transparent hover:border-special cursor-pointer py-[10px] px-4 hover:text-special text-opacity items-center gap-1">
            <GiWashingMachine size={15} className="text-gray-500" />
            <p className="text-[13px] font-medium">Electronics</p>
          </li>
          <li className="flex border-l-[2px] border-transparent hover:border-special cursor-pointer py-[10px] px-4 hover:text-special text-opacity items-center gap-1">
            <GiWashingMachine size={15} className="text-gray-500" />
            <p className="text-[13px] font-medium">Electronics</p>
          </li>
        </ul>
      </div>

      <div className="w-full max-w-[495px] lg:max-w-[540px] lg:mx-auto">
        <ul className="flex items-center justify-between">
            <li className="text-[14px] font-semibold cursor-pointer duration-100 uppercase text-special">Home</li>
            <li className="text-[14px] relative font-semibold cursor-pointer duration-100 uppercase hover:text-special text-primary">
                <img src={newIcon} className="absolute top-[-17px] right-0" alt="" />
                <p>features</p>
            </li>
            <li className="text-[14px] relative font-semibold cursor-pointer duration-100 uppercase hover:text-special text-primary">
            <img src={hotIcon} className="absolute top-[-17px] right-0" alt="" />
                <p>deals</p>
            </li>
            <li className="text-[14px] font-semibold cursor-pointer duration-100 uppercase hover:text-special text-primary">UNDER $100</li>
            <li className="text-[14px] font-semibold cursor-pointer duration-100 uppercase hover:text-special text-primary">About us</li>
            <li className="text-[14px] font-semibold cursor-pointer duration-100 uppercase hover:text-special text-primary">Contact us</li>
        </ul>
      </div>

      <div className="hidden lg:flex items-center gap-1">
        <FaSquarePhone size={14} className="mt-[1px]" />
        <span className="text-[12px] font-medium">Hotline <span className="text-special font-semibold text-[14px]">(+880) <span>185524789</span></span></span>
      </div>
    </div>
  );
};

export default BottomNavbar;
