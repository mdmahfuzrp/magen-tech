import Electronics from "../Electronics/Electronics";
import Fashion from "../Fashion/Fashion";
import BannerAd from "../../../SharedComponents/BannerAd";
import HealthBeauty from "../HealthBeauty/HealthBeauty";

import Banner9 from "../../../assets/images/banner-9.jpg";
import Banner10 from "../../../assets/images/banner-10.jpg";
import Banner11 from "../../../assets/images/banner-11.jpg";
import BestSeller from "../BestSeller/BestSeller";

// images
import banner12 from "../../../assets/images/banner-12.jpg";
import LatestBlog from "../LatestBlog/LatestBlog";
import Quotes from "../Quotes/Quotes";
import CallUs from "../CallUs/CallUs";

const BottomSections = () => {
  return (
    <div className="max-w-[1500px] mx-auto mt-[-30px] px-5 sm:px-8 grid grid-cols-1 gap-6 lg:grid-cols-7">
      <div className="col-span-full lg:col-span-5 ">
        <Electronics />
        <BannerAd img={Banner9} />
        <Fashion />
        <BannerAd img={Banner10} />
        <HealthBeauty />
        <BannerAd img={Banner11} />
      </div>
      <div className="col-span-full mt-10  lg:col-span-2">
        <div className="relative cursor-pointer">
          <img src={banner12} alt="" className="w-full" />
          <div className="absolute w-full h-full hover:bg-[#ffffff33] top-0 left-0 right-0 bottom-0"></div>
        </div>
        <BestSeller />
        <CallUs />
        <LatestBlog />
        <Quotes />
      </div>
    </div>
  );
};

export default BottomSections;
