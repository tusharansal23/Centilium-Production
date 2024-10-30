import React, { useEffect, useRef } from 'react';
import jQuery from 'jquery';
import '../css/style.css';
import '../css/bootstrap.css';
import '../css/responsive.css';
//import '../css/font-awesome.min.css';
import '../css/templatemo.css';
import '../css/owl.css';
import '../css/carousel.css';
import ControlledCarousel from './HomepageCarousel';

import s1 from '../images/s1.png';
import s2 from '../images/s2.png';
import s3 from '../images/s3.png';
import s4 from '../images/s4.png';
import about1 from '../images/about1.jpg';

import HomepageService from './HomepageService';
import HomepageAbout from './HomepageAbout';
import HomepageFunfacts from './HomepageFunfacts';
import HomepageContact from './HomepageContact';
import HomepageReview from './HomepageReview';
import HomepageInfo from './HomepageInfo';

import '../css/bootstrap.css';
import '../css/style.css';
import '../css/responsive.css';
import '../css/owl.css';
import '../css/templatemo.css';
import '../css/carousel.css';




import OwlCarousel from 'react-owl-carousel';
import HomepageMap from './HomepageMap';



const BodyContent = () => {
  
    const address = "301, Robert Parkinson drive, Brampton";
  return (
          <div className="hero_area">
              {/*  slider section  */}
                  <ControlledCarousel /> {/* Use the ControlledCarousel component here */}
   
    

              { /* service section */ }

                  <HomepageService />

              {/*  end service section  */}

              {/*  about section  */}

                  <HomepageAbout />

              {/*  end about section */}

              {/*  fun facts section  */}

                  <HomepageFunfacts />

              {/*  fun facts section */}

              {/* <!-- contact section --> */}
                  
                  {/* <HomepageContact /> */}
              
              {/* <!-- end contact section --> */}

              {/* <!-- client section --> */}

                  <HomepageMap address={address} />
              {/* <!-- end client section --> */}


              
          </div>
  );
};

export default BodyContent;
