import React from "react";
import SectionHeader from "../../../SharedComponents/SectionHeader";
import FashionDoubleSlider from "../../../utils/FashionDoubleSlider/FashionDoubleSlider";

const Fashion = () => {
  const options = ["Dresses", "Jumpsuits", "T-shirts", "Bags", "Shoes"];
  
  return (
    <div className="w-full">
      <SectionHeader options={options} title="fashion" background={true} />
      <div>
        <FashionDoubleSlider />
      </div>
    </div>
  );
};

export default Fashion;
