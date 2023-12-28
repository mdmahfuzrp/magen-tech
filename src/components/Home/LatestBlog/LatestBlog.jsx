// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { BsCalendar2Date } from "react-icons/bs";

// import required modules
import { Pagination } from "swiper/modules";

// Section imported
import SectionHeader from "../../../SharedComponents/SectionHeader";

// custom css connection
import "./LatestBlog.css";

const bestSellerData = [
  {
    id: 1,
    imageurl:
      "http://magento2.magentech.com/themes/sm_shopping/pub/media/magefan_blog/blo1.jpg",
    name: "Moving From Ticket System To Forum",
    date: "June 19, 2017",
  },
  {
    id: 2,
    imageurl:
      "http://magento2.magentech.com/themes/sm_shopping/pub/media/magefan_blog/blo1.jpg",
    name: "8 Ideas To Get Your Site Ready",
    date: "June 19, 2017",
  },
  {
    id: 3,
    imageurl:
      "http://magento2.magentech.com/themes/sm_shopping/pub/media/magefan_blog/blo3.jpg",
    name: "Moving From Ticket System To Forum",
    date: "June 19, 2017",
  },
];

const LatestBlog = () => {
  return (
    <div id="bestSeller" className=" flex flex-col relative">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper relative"
      >
        <div className="w-full absolute top-0 z-[9]">
          <SectionHeader title="latest blog" visible={false} small={true} />
        </div>

        {bestSellerData.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center justify-center flex-col w-full gap-5">
                <div>
                  <img src={data?.imageurl} className="w-full" alt="" />
                </div>
                <div className="flex items-start flex-col  h-[145px] w-full">
                  <h2 className="text-[12px] text-opacity flex items-center gap-1 font-medium">
                    <span>
                      <BsCalendar2Date />
                    </span>
                    {data?.date}
                  </h2>
                  <h2 className="text-[14px] !capitalize text-primary font-semibold">
                    {data?.name}
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LatestBlog;
