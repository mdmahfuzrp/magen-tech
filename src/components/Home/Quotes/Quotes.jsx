// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import {FaQuoteLeft, FaQuoteRight  } from 'react-icons/fa'

// import required modules
import { Pagination } from "swiper/modules";

import './Quotes.css'


const bestSellerData = [
  {
    id: 1,
    imageurl:
      "http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/clients/client-1.jpg",
    name: "Johny Walker",
    description:
      "Lorem ipsum dolor sit amet, conmetur asdipiscing elit,sed doeiusmod temporaceimdid tempora ut labore et dolore.",
  },
  {
    id: 2,
    imageurl:
      "http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/clients/client-2.jpg",
    name: "Johny Walker",
    description:
      "Lorem ipsum dolor sit amet, conmetur asdipiscing elit,sed doeiusmod temporaceimdid tempora ut labore et dolore.",
  },
  {
    id: 3,
    imageurl:
      "http://magento2.magentech.com/themes/sm_shopping/pub/media/wysiwyg/clients/client-3.jpg",
    name: "Johny Walker",
    description:
      "Lorem ipsum dolor sit amet, conmetur asdipiscing elit,sed doeiusmod temporaceimdid tempora ut labore et dolore.",
  },
];

const Quotes = () => {
  return (
    <div id="quotes" className=" flex mt-[35px] flex-col relative border p-5">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper relative"
      >
        {bestSellerData.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex items-center justify-center flex-col w-full gap-5">
                <div>
                  <img src={data?.imageurl} className="w-full border-4 rounded-full object-cover border-special" alt="" />
                </div>
                <div className="flex items-start flex-col  h-[145px] w-full">
                  <h2 className="text-[14px] text-center text-primary flex items-center justify-center w-full gap-1 font-semibold">
                    {data?.name}
                  </h2>
                  <h2 className="text-[12px] relative p-5 pb-0 pt-2 !capitalize text-opacity font-medium">
                    <span className="flex opacity-10 text-[18px] absolute left-2 top-[8px]"><FaQuoteLeft /></span>
                    {data?.description}
                    <span className="flex opacity-10 text-[18px] absolute right-[105px] bottom-[2px]"><FaQuoteRight  /></span>
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

export default Quotes;
