import SectionHeader from "../../SharedComponents/SectionHeader";
import MultiSlider from "./MultiSlider/MultiSlider";
import { productData, responsive } from "./MultiSlider/data";

const FlashSale = () => {
  const options = [
    "Tablet",
    "Computer",
    "Laptop",
    "TV & Audio",
    "Headphone",
    "Electronics",
  ];
  return (
    <div className="max-w-[1500px] px-5 sm:px-8">
      <SectionHeader options={options} title="Flash Sale" />
      <MultiSlider countdown={true} data={productData} responsive={responsive} />
    </div>
  );
};

export default FlashSale;
