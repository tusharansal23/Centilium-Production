import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const HomepageReview = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots:false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: [
        '<i class="bi bi-arrow-left"></i>', // Left arrow
        '<i class="bi bi-arrow-right"></i>' // Right arrow
      ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      }
    },
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center testimonial-container mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <h1 className="mb-3">News & Updates</h1>
          <p>
            Stay up-to-date with our latest news and updates. From exciting
            developments to upcoming events, our section keeps you informed and
            inspired. Explore our updates today!
          </p>
        </div>
{/*  */}
        <OwlCarousel className="owl-theme testimonial-carousel" {...options}>
            
                <div className="testimonial-item bg-light rounded p-3">
                    <div className="bg-white border rounded p-4">
                        <p>
                            I am very happy with the service. I was able to get my permanent residency with so much ease.
                        </p>
                        <div className="d-flex align-items-center">
                            <div className="ps-3">
                                <h6 className="fw-bold mb-1">Kavita S</h6>
                                <small>India</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="testimonial-item bg-light rounded p-3">
                    <div className="bg-white border rounded p-4">
                        <p>
                            I was able to re-unite with my parents. Thank you centilium Immigration. AND MANY MORE
                        </p>
                        <div className="d-flex align-items-center">
                            <div className="ps-3">
                                <h6 className="fw-bold mb-1">BHANU K</h6>
                                <small>India</small>
                            </div>
                        </div>
                    </div>
                </div>

        </OwlCarousel>
      </div>
    </div>
  );
};

export default HomepageReview;
