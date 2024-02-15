import BarSlider from "../../utils/BarSlider/BarSlider";

import rightTopImg from "../../assets/images/banner-3.jpg";
import rightBottomImg from "../../assets/images/banner-4.jpg";
import bottomImg from "../../assets/images/banner-5.jpg";
const Header = () => {
  return (
    <div className="max-w-[1500px] mx-auto px-5 lg:px-8 pt-[12px]">
      <div className="grid grid-cols-1 gap-y-3 md:gap-x-3 md:grid-cols-4">
        {/* Slider */}
        <div className="col-span-3">
          <BarSlider />
        </div>
        <div className="flex col-span-1 flex-col w-full gap-y-3">
          <div className="w-full relative">
            <img src={rightTopImg} className="w-full" alt="" />
            <div className="overlay absolute w-full h-full left-0 top-0 bottom-0 right-0 cursor-pointer hover:bg-[#ffffff33] rounded-[5px]"></div>
          </div>
          <div className="w-full relative">
            <img src={rightBottomImg} className="w-full" alt="" />
            <div className="overlay absolute w-full h-full left-0 top-0 bottom-0 right-0 cursor-pointer hover:bg-[#ffffff33] rounded-[5px]"></div>
          </div>
        </div>
      </div>
      <div className="w-full rounded-[5px] relative mt-5">
        <img src={bottomImg} className="w-full rounded-[4px] h-full object-contain" alt="" />
        <div className="overlay absolute w-full h-full left-0 top-0 bottom-0 right-0 cursor-pointer hover:bg-[#ffffff33] rounded-[5px]"></div>
      </div>
    </div>
  );
};

export default Header;
