import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../images/hero-bg.jpg';
// import '../css/bootstrap.css';
// import '../css/style.css';
// import '../css/responsive.css';
// import '../css/owl.css';
// import '../css/templatemo.css';
import '../css/carousel.css';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} 
              swipeable={true}
              draggable={true}
              autoPlay={true}
              showDots={true}
              ssr={true}
              renderDotsOutside={true}
    
    >
      <Carousel.Item>
        <img
          className="d-block w-100 h-400"
          src={ExampleCarouselImage}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-7 pt-5">
                    <div className="carousel-detail-box">
                        <h1>
                            Job Opportunities Abroad
                      
                        </h1>
                        <p>
                            International Career Prospects: Embrace global job prospects, 
                            expand your network, and gain cross-cultural skills to boost your career on a global scale
                        </p>
                        <div className="btn-box">
                            <a href="" class="btn-1"> Read more </a>
                            <a href="" class="btn-2">Get A Quote</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-400"
          src={ExampleCarouselImage}
          alt="Second slide"
        />
        <Carousel.Caption>
        <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-7 pt-5">
                  <div class="carousel-detail-box">
                    <h1>
                      Want to be a Canadian ?
                      
                    </h1>
                    <p>
                      Discover the steps to becoming a Canadian citizen and embrace the diverse opportunities and high quality of life 
                      that Canada has to offer. Start your journey towards calling Canada your home and experiencing its renowned social services.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn-1"> Read more </a>
                      <a href="" class="btn-2">Get A Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-400"
          src={ExampleCarouselImage}
          alt="Third slide"
        />
        <Carousel.Caption>
        <div class="container">
              <div class="row">
                <div class="col-md-9 col-lg-7 pt-5">
                  <div class="carousel-detail-box">
                    <h1>
                      Immigrate To Your {'\n'}
                      Dream Destination
                      
                    </h1>
                    <p>
                      Embark on your journey to your dream destination with confidence, 
                      as our specialized immigration consultancy empowers you to navigate the complexities of immigration, 
                      making your dreams a reality.
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn-1"> Read more </a>
                      <a href="" class="btn-2">Get A Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
