import Img1 from '../assets/images/banner-6.jpg'
import Img2 from '../assets/images/banner-7.jpg'
const SuperDealAd = () => {
    return (
        <div className="max-w-[1500px] gap-5 my-12  px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-2">
            <div className='relative cursor-pointer'>
            <img src={Img1} alt="" />
            <div className='absolute w-full h-full hover:bg-[#ffffff33] top-0 left-0 right-0 bottom-0'></div>
            </div>
            <div className='relative cursor-pointer'>
            <img src={Img2} alt="" />
            <div className='absolute w-full h-full hover:bg-[#ffffff33] top-0 left-0 right-0 bottom-0'></div>
            </div>
        </div>
    );
};

export default SuperDealAd;