import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from "../../../Assets/Brands/brand1.jpg";
import Brand2 from "../../../Assets/Brands/brand2.jpg";
const BrandCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Brand1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Brand2} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default BrandCarousel;
