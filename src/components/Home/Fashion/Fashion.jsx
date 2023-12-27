import React from "react";
import SectionHeader from "../../../SharedComponents/SectionHeader";
import ElectronicsProduct from "../Electronics/ElectronicsProduct";

const Fashion = () => {
  const options = ["Dresses", "Jumpsuits", "T-shirts", "Bags", "Shoes"];
  
  return (
    <div className="w-full">
      <SectionHeader options={options} title="fashion" background={true} />
      <div>
        <ElectronicsProduct />
      </div>
    </div>
  );
};

export default Fashion;
