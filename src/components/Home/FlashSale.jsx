import SectionHeader from "../../SharedComponents/SectionHeader";
import Options from "../../utils/Options/Optionns";
import MultiSlider from "./MultiSlider/MultiSlider";

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
      <MultiSlider />
    </div>
  );
};

export default FlashSale;
