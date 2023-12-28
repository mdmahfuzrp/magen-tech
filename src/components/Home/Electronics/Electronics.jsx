import React from "react";
import SectionHeader from "../../../SharedComponents/SectionHeader";
import ElectricsDoubleSlider from "../../../utils/ElectricsDoubleSlider/ElectricsDoubleSlider";

const Electronics = () => {
  const options = ["Tablet", "Computer", "Laptop", "TV & Audio", "Headphone"];
  
  return (
    <div className="w-full">
      <SectionHeader options={options} title="electronics" background={true} />
      <div>
        <ElectricsDoubleSlider />
      </div>
    </div>
  );
};

export default Electronics;
