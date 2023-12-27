import SectionHeader from "../../../SharedComponents/SectionHeader";
import MultiSlider from "../MultiSlider/MultiSlider";
import { responsive, youAlsoLikeData } from "./youAlsoLikeData";

const YouAlsoLike = () => {
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
      <SectionHeader options={options} title="you may also like" />
      <MultiSlider countdown={false} data={youAlsoLikeData} responsive={responsive} />
    </div>
  );
};

export default YouAlsoLike;
