import React from "react";
import SectionHeader from "../../../SharedComponents/SectionHeader";
import HealthBeautyDoubleSlider from "../../../utils/HealthBeautyDoubleSlider/HealthBeautyDoubleSlider";

const HealthBeauty = () => {
  const options = ["Bath Salts", "Eyes", "Nail Dryer", "Face Care", "Body Arts"];
  
  return (
    <div className="w-full">
      <SectionHeader options={options} title="health & beauty" background={true} />
      <div>
        <HealthBeautyDoubleSlider />
      </div>
    </div>
  );
};

export default HealthBeauty;
