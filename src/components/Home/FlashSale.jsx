import MultiSlider from "./MultiSlider/MultiSlider";

const FlashSale = () => {
  return (
    <div className="max-w-[1500px] px-5 sm:px-8">
      <div className="flex border-b-2 my-6 mt-8 items-center justify-between">
        <div className="w-fit relative pb-[5px]">
          <h1 className="text-[18px] font-bold  border-special uppercase">
            flash sale
          </h1>
          <div className="w-full h-[2px] bg-special absolute bottom-[-2px]"></div>
        </div>
        <ul className="flex gap-6 text-[14px] font-semibold text-primary">
          <li className="hover:text-special text-special cursor-pointer duration-100">
            Tablet
          </li>
          <li className="hover:text-special cursor-pointer duration-100">
            Computer
          </li>
          <li className="hover:text-special cursor-pointer duration-100">
            Laptop
          </li>
          <li className="hover:text-special cursor-pointer duration-100">
            TV & Audio
          </li>
          <li className="hover:text-special cursor-pointer duration-100">
            Headphone
          </li>
          <li className="hover:text-special cursor-pointer duration-100">
            Electronics
          </li>
        </ul>
      </div>
      <MultiSlider />
    </div>
  );
};

export default FlashSale;
