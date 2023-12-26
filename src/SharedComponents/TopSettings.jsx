import { IoIosArrowDown } from "react-icons/io";
import {FaTruck, FaUser } from 'react-icons/fa'
import { Link } from "react-router-dom";
const TopSettings = () => {
  return (
    <div className="border-b border-opacity-15">
      <div className="container flex items-center justify-between">
        <div className="flex relative items-center gap-8">
          <div id="language" className="flex py-3 
           items-center gap-[2.5rem]">
            <div className="flex cursor-pointer gap-1 items-center justify-center">
              <img
                src="http://magento2.magentech.com/themes/sm_shopping/pub/static/frontend/Sm/shopping/en_US/images/flags/flag_default.png"
                alt=""
              />
              <p className="text-[12px] uppercase text-opacity font-medium">
                English
              </p>
              <span className="text-opacity ml-[1px] text-[14px]">
                <IoIosArrowDown />
              </span>
            </div>

            <ul
              id="language-item"
              className="hidden flex-col w-full items-start gap-[6px] absolute bg-white top-[42px] py-3 px-3 shadow-basic"
            >
              <li className="flex hover:text-special text-opacity cursor-pointer gap-1 items-center justify-center">
                <img
                  src="http://magento2.magentech.com/themes/sm_shopping/pub/static/frontend/Sm/shopping/en_US/images/flags/flag_french.png"
                  alt=""
                />
                <p className="text-[12px] uppercase font-medium">
                  French
                </p>
              </li>
              <li className="flex hover:text-special text-opacity cursor-pointer gap-1 items-center justify-center">
                <img
                  src="http://magento2.magentech.com/themes/sm_shopping/pub/static/frontend/Sm/shopping/en_US/images/flags/flag_german.png"
                  alt=""
                />
                <p className="text-[12px] uppercase font-medium">
                  German
                </p>
              </li>
              <li className="flex hover:text-special text-opacity cursor-pointer gap-1 items-center justify-center">
                <img
                  src="http://magento2.magentech.com/themes/sm_shopping/pub/static/frontend/Sm/shopping/en_US/images/flags/flag_argentina.png"
                  alt=""
                />
                <p className="text-[12px] uppercase font-medium">
                  Argentina
                </p>
              </li>
              <li className="flex hover:text-special text-opacity cursor-pointer gap-1 items-center justify-center">
                <img
                  src="http://magento2.magentech.com/themes/sm_shopping/pub/static/frontend/Sm/shopping/en_US/images/flags/flag_belgium.png"
                  alt=""
                />
                <p className="text-[12px] uppercase font-medium">
                  Belgium
                </p>
              </li>
              <li className="flex hover:text-special text-opacity cursor-pointer gap-1 items-center justify-center">
                <img
                  src="http://magento2.magentech.com/themes/sm_shopping/pub/static/frontend/Sm/shopping/en_US/images/flags/flag_honduras.png"
                  alt=""
                />
                <p className="text-[12px] uppercase  font-medium">
                  Honduras
                </p>
              </li>
            </ul>
          </div>
          
          <div className="line absolute left-[108px] w-[1px] h-[10px] bg-slate-300"></div>

          <div id="language" className="flex py-3 items-center gap-[2.5rem]">
            <div className="flex cursor-pointer gap-1 items-center justify-center">
              <p className="text-[12px] uppercase text-opacity font-medium">
                USD 
              </p>
              <span className="text-opacity ml-[1px] text-[14px]">
                <IoIosArrowDown />
              </span>
            </div>

            <ul
              id="language-item"
              className="hidden flex-col w-full items-start gap-[6px] absolute bg-white top-[42px] py-3 px-3 shadow-basic"
            >
              <li className="flex cursor-pointer hover:text-special text-opacity gap-1 items-center justify-center">
                
                <p className="text-[12px] uppercase font-medium">
                  EUR - <span className="capitalize">Euro</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex relative items-center gap-8">
          <div id="language" className="flex py-3 
           items-center gap-[2.5rem]">
            <Link className="lg:flex hidden hover:text-special text-gray-500 items-center gap-1"><FaTruck className="rotate-y ml-[1px] text-[14px]" /> <span className="text-[12px]  font-medium capitalize">Track Your Order</span></Link>
          </div>
          
          <div className="line hidden lg:flex absolute left-[137px] w-[1px] h-[10px] bg-slate-300"></div>

          <div id="language" className="flex py-3 items-center gap-2">
            <Link className="flex hover:text-special text-gray-500 items-center gap-1"><FaUser className="rotate-y  ml-[1px] text-[12px]" /><span className="text-[12px]  font-medium capitalize">Login</span></Link>
            <span className="text-[12px]  font-medium lowercase">or</span>
            <Link><span className="text-[12px] hover:text-special text-gray-500 tracking-wider font-medium capitalize">Register</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSettings;
