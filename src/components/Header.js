import React from 'react';
import Slider from 'react-slick';
import ExampleCarouselImage1 from '../images/hero-bg.jpg';
import ExampleCarouselImage2 from '../images/about2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  // Slick settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />, // Custom prev arrow component
    nextArrow: <NextArrow />, // Custom next arrow component
  };

  return (
    <div className="container-xxl bg-white p-0 mtinperc-10">
      <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6 p-5 mt-lg-5">
            <h5 className="display-5 animated fadeIn mb-4">Your Pathway To Canada <span className="text-primary">Starts Here</span></h5>
            <p className="animated fadeIn mb-4 pb-2">At Centilium Immigration, we are dedicated to helping you navigate the complexities of Canadian Immigration with ease & confidence.
              Whether you're looking to start a new life in Canada, reunite with family, or exploring exciting business opportunities, our expert team is here to guide you every step of the way.</p>
            <a href="" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
          </div>
          <div className="col-md-6 animated fadeIn">
            <Slider {...settings}>
              <div>
                <img className="img-fluid carousel-image" src={ExampleCarouselImage1} alt=""/>
              </div>
              <div>
                <img className="img-fluid carousel-image" src={ExampleCarouselImage2} alt=""/>
              </div>
              <div>
                <img className="img-fluid carousel-image" src={ExampleCarouselImage1} alt=""/>
              </div>
              <div>
                <img className="img-fluid carousel-image" src={ExampleCarouselImage2} alt=""/>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom Prev Arrow Component
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} size="2x" />
    </div>
  );
};

// Custom Next Arrow Component
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} size="2x" />
    </div>
  );
};

export default Header;
