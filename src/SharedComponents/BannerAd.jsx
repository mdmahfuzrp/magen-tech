
const BannerAd = ({img}) => {
  return (
    <div className="my-10 mt-5">
      <div className="relative cursor-pointer">
        <img src={img} alt="" />
        <div className="absolute w-full h-full hover:bg-[#ffffff33] top-0 left-0 right-0 bottom-0"></div>
      </div>
    </div>
  );
};

export default BannerAd;
