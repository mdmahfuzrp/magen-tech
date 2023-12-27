import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import './MultiSlider.css'

const MultiSlider = ({countdown, data, responsive}) => {
  const product = data.map((item, index) => (
    <Product
      key={index}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
      discountPrice={item.discountPrice}
      discount={item.discount}
      countdown={countdown}
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
