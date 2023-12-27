import React from "react";
import SectionHeader from "../../../SharedComponents/SectionHeader";
import ElectronicsProduct from "./ElectronicsProduct";

const Electronics = () => {
  const options = ["Tablet", "Computer", "Laptop", "TV & Audio", "Headphone"];
  
  return (
    <div className="w-full">
      <SectionHeader options={options} title="electronics" background={true} />
      <div>
        <ElectronicsProduct />
      </div>
    </div>
  );
};

export default Electronics;
