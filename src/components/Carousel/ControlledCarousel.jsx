import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import one from "./assets/one.jpg";
import two from "./assets/two_.webp";
import three from "./assets/three_.webp";
import classes from "./ControlledCarousel.module.css";
function UncontrolledExample({ deviceType }) {
  return (
    <Carousel interval={3000} controls={deviceType === "mobile" ? false : true}>
      <Carousel.Item className={classes.carouselItem1}>
        <Link to="/products/6493fd180b77b5cd6077dfa4">
          <img className="d-block w-100" src={one} alt="First slide" />
        </Link>
      </Carousel.Item>

      <Carousel.Item>
        <Link to="/products/6493fd180b77b5cd6077dfa8">
          <img className="d-block w-100" src={two} alt="Second slide" />
        </Link>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/products/6493fd180b77b5cd6077dfa5">
          <img className="d-block w-100" src={three} alt="Third slide" />
        </Link>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
