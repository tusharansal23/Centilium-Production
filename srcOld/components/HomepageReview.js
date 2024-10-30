import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import '../css/carousel.css';
import clientImage1 from "../images/client-1.jpg";
import clientImage2 from "../images/client-2.jpg";

function HomepageReview() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container">
        <div className="heading_container">
            <h2>
                What Says Our Client
            </h2>
        </div>
        <div className="client_container">
        <Carousel activeIndex={index} onSelect={handleSelect} 
                swipeable={true}
                draggable={true}
                autoPlay={true}
                showDots={true}
                ssr={true}
                renderDotsOutside={true}
                controls={false}>

            <Carousel.Item>
                <div className = 'd-flex w-100'>
                    <div className="review-box">
                        <div className="review-img-box">
                            <img src={clientImage1} alt="" className="img-1"/>
                        </div>
                        <div className="review-detail-box">
                            <h5>
                                Thilina Mathews
                            </h5>
                            <h6>
                                Srilanka
                            </h6>
                            <p>
                                I highly recommend Centilium Immigration for their exceptional expertise, personalized approach, 
                                and efficient services in providing Canada Business Visa consultations. 
                                Their professionalism and attention to detail made the process smooth and reassuring.  
                            </p>
                        </div>
                    </div>
                    <div className="review-box review-margin-4">
                        <div className="review-img-box">
                            <img src={clientImage2} alt="" class="img-1"/>
                        </div>
                        <div className="review-detail-box">
                            <h5>
                                Zaire Smith
                            </h5>
                            <h6>
                                Durban
                            </h6>
                            <p>
                                I recently utilized Centilium Immigration's student visa consultation service, 
                                and I am extremely satisfied with the experience. Their knowledgeable consultants provided personalized guidance, 
                                addressing all my concerns, and their efficient support made the entire visa application process smooth and hassle-free. 
                                I highly recommend Centilium Immigration for anyone seeking professional assistance with their student visa journey.  
                            </p>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='d-flex w-100'>
                    <div className="review-box">
                        <div className="review-img-box">
                            <img src={clientImage1} alt="" className="img-1"/>
                        </div>
                        <div className="review-detail-box">
                            <h5>
                                Mark Evans
                            </h5>
                            <h6>
                                Magna
                            </h6>
                            <p>
                                I had an excellent experience with Centilium Immigration's tourist visa consultation service. 
                                The consultants were knowledgeable, efficient, and provided personalized guidance, making the visa application process hassle-free. 
                                I highly recommend Centilium Immigration for anyone seeking professional assistance with their tourist visa requirements.
                            </p>
                        </div>
                    </div>
                    <div className="review-box review-margin-4">
                        <div className="review-img-box">
                            <img src={clientImage2} alt="" className="img-1"/>
                        </div>
                        <div className="review-detail-box">
                            <h5>
                                Anthony White
                            </h5>
                            <h6>
                                Magna
                            </h6>
                            <p>
                                Centilium Immigration's work visa consultation service was exceptional! 
                                Their knowledgeable consultants provided personalized guidance, making the application process stress-free. 
                                I highly recommend them for anyone seeking professional assistance with their work visa.  
                            </p>
                        </div>
                    </div>
                </div>
          </Carousel.Item>
      </Carousel>
      </div>
    </div>
  );
}

export default HomepageReview;
