// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Images
import Img1 from "../../assets/images/item-1.jpg";
import Img2 from "../../assets/images/item-2.jpg";
import Img3 from "../../assets/images/item-3.jpg";

// Css
import './BarSlider.css'
const BarSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={Img1} className="w-full " alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Img2} className="w-full " alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Img3} className="w-full " alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BarSlider;
