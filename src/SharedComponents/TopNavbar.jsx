import { Link } from "react-router-dom";
import { HiShoppingBag } from "react-icons/hi";
const TopNavbar = () => {
  return (
    <div className="max-w-[1500px] lg:px-8 pt-7 flex flex-col lg:flex-row gap-4 items-center justify-between">
      <div>
        <Link to="/">
          <img
            className="w-[200px]"
            src="http://magento2.magentech.com/themes/sm_shopping/pub/static/frontend/Sm/shopping/en_US/images/logo.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="w-full lg:w-fit px-5 bg-special lg:bg-white py-1 flex items-center justify-between gap-5">
        <div className="lg:hidden">X</div>

        <div className="flex bg-white border p-2 rounded-full w-full lg:w-fit px-3 gap-4">
          <select
            name=""
            id=""
            className="text-[12px] hidden sm:flex outline-none tracking-wide font-medium"
          >
            <option value="" className="text-[12px] font-medium">
              All Categories
            </option>
            <option value="" className="text-[12px] font-medium">
              --Electronics
            </option>
            <option value="" className="text-[12px] font-medium">
              --Tablet
            </option>
            <option value="" className="text-[12px] font-medium">
              --Computer
            </option>
            <option value="" className="text-[12px] font-medium">
              --Laptop
            </option>
            <option value="" className="text-[12px] font-medium">
              --TV & Audio
            </option>
            <option value="" className="text-[12px] font-medium">
              --Headphone
            </option>
          </select>
          <div className="sm:border-l sm:pl-4 relative w-full lg:w-[330px]">
            <input
              type="text"
              className="text-[12px] w-full font-medium pr-[66px] border-none outline-none"
              placeholder="Enter keyword to search..."
            />
            <button className="text-[12px] font-semibold absolute right-[-13px] px-3 rounded-r-full top-[-9px] bottom-[-9px] bg-black text-white">
              SEARCH
            </button>
          </div>
        </div>

        <div className="flex lg:hidden">
          <div className="w-[45px] h-[45px] relative bg-[#0000003f] flex items-center justify-center rounded-full">
            <HiShoppingBag size={30} className="text-white" />
            <span className="absolute bg-[#424141] w-[25px] pl-[2px] pr-[1px] pt-[2px] text-[13px] flex items-center top-[-10px] right-[-5px] justify-center text-white rounded-full h-[25px]">
              0
            </span>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center hidden">
        <div className="flex items-center gap-3">
          <div className="w-[45px] h-[45px] relative bg-special flex items-center justify-center rounded-full">
            <HiShoppingBag size={30} className="text-white" />
            <span className="absolute bg-[#424141] w-[25px] pl-[2px] pr-[1px] pt-[2px] text-[13px] flex items-center top-[-10px] right-[-5px] justify-center text-white rounded-full h-[25px]">
              0
            </span>
          </div>
          <div className="text-[14px] font-semibold">
            <p>YOUR CART</p>
            <p className="text-special">$0.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
