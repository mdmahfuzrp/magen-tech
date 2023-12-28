// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// star image import
import starImg from "../../../assets/images/star.png";

// custom css connection
import "./BestSeller.css";
import Options from "../../../utils/Options/Optionns";
import SectionHeader from "../../../SharedComponents/SectionHeader";

const bestSellerData = [
  {
    id: 1,
    imageurl: "https://i.ibb.co/g4DGFYP/1.jpg",
    name: "Panasonic In-Ear Stereo Earphones",
    price: "68.00",
    discountPrice: "72.00",
    discount: -6,
    description: "Some text about the product..",
  },
  {
    id: 2,
    imageurl: "https://i.ibb.co/RTtY90n/2.jpg",
    name: "Nikon D3300 AF-P DX 18-55mm Digital SLR",
    price: "80.00",
    discountPrice: "83.00",
    discount: -6,
    description: "Some text about the product..",
  },
  {
    id: 3,
    imageurl: "https://i.ibb.co/8mgg8Kv/3.jpg",
    name: "HD Tablet with Alexa Hands Free",
    price: "75.00",
    discount: -7,
    discountPrice: "75.00",
    description: "Some text about the product..",
  },
  {
    id: 4,
    imageurl: "https://i.ibb.co/wMnK2Yj/4.jpg",
    name: "The Wonder and Science of Sound",
    price: "50.00",
    discount: -15,
    discountPrice: "59.00",
    description: "Some text about the product..",
  },
  {
    id: 5,
    imageurl: "https://i.ibb.co/wMnK2Yj/4.jpg",
    name: "The Wonder and Science of Sound",
    price: "50.00",
    discount: -15,
    discountPrice: "59.00",
    description: "Some text about the product..",
  },
];

const BestSeller = () => {
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
          <SectionHeader title="best seller" visible={false} small={true} />
        </div>
        <SwiperSlide>
          <div className="flex flex-col gap-4 w-full">
            {bestSellerData.map((data) => (
              <div
                key={data.id}
                className="flex items-center justify-start w-full gap-5"
              >
                <div>
                  <img src={data?.imageurl} className="max-w-[70px]" alt="" />
                </div>
                <div className="flex items-start flex-col">
                  <img
                    src={starImg}
                    alt=""
                    className="max-w-[70px] object-contain ml-[-6px]"
                  />
                  <h2 className="text-[14px] text-primary font-semibold">
                    {data.name.slice(0, 25)}...
                  </h2>
                  <p className="price mt-1 mb-2 text-red-500 font-semibold text-[18px]">
                    ${data.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-4 w-full">
            {bestSellerData.map((data) => (
              <div
                key={data.id}
                className="flex items-center justify-start w-full gap-5"
              >
                <div>
                  <img src={data?.imageurl} className="max-w-[70px]" alt="" />
                </div>
                <div className="flex items-start flex-col">
                  <img
                    src={starImg}
                    alt=""
                    className="max-w-[70px] object-contain ml-[-6px]"
                  />
                  <h2 className="text-[14px] text-primary font-semibold">
                    {data.name.slice(0, 25)}...
                  </h2>
                  <p className="price mt-1 mb-2 text-red-500 font-semibold text-[18px]">
                    ${data.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-4 w-full">
            {bestSellerData.map((data) => (
              <div
                key={data.id}
                className="flex items-center justify-start w-full gap-5"
              >
                <div>
                  <img src={data?.imageurl} className="max-w-[70px]" alt="" />
                </div>
                <div className="flex items-start flex-col">
                  <img
                    src={starImg}
                    alt=""
                    className="max-w-[70px] object-contain ml-[-6px]"
                  />
                  <h2 className="text-[14px] text-primary font-semibold">
                    {data.name.slice(0, 25)}...
                  </h2>
                  <p className="price mt-1 mb-2 text-red-500 font-semibold text-[18px]">
                    ${data.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default BestSeller;
