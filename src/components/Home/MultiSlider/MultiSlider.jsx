import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";
import './MultiSlider.css'

const MultiSlider = () => {
  const product = productData.map((item, index) => (
    <Product
      key={index}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
      discountPrice={item.discountPrice}
      discount={item.discount}
    />
  ));
  return (
    <div className="">
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
};

export default MultiSlider;
