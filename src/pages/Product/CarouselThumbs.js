import React from "react";
import Carousel from "react-bootstrap/carousel";
import "./CarouselThumbs.css";

const CarouselThumbs = (props) => {
  return (
    <React.Fragment>
      <Carousel className="carouselthumbs" fade="true">
        <Carousel.Item>
          <img className="d-block" src={props.product1m} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={props.product1f} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block" src={props.product1b} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
};

export default CarouselThumbs;
