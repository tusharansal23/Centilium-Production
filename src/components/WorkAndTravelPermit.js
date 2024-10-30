import React, { useState, useEffect } from 'react';
import "../css/Service.css";
import s1 from "../images/service-lmia.jpg";
import s2 from "../images/emp-ver.jpg";
import s3 from "../images/emp-veri.jpg";
import s4 from "../images/lab-mark-needs.jpg";
import s5 from "../images/lab-mrk.jpg";
import s6 from "../images/temp-work-perm.jpg";
import s7 from "../images/apply-small.jpg";
import s8 from "../images/apply-large.jpg";

function WorkAndTravelPermit() {
  const [selectedVisa, setSelectedVisa] = useState('WorkAndTravelPermit');
  const [isSwapped, setIsSwapped] = useState(false);
  const [pieces, setPieces] = useState([]);

  const handleVisaSelect = (visaType) => {
    setSelectedVisa(visaType);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwapped(prevState => !prevState);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    const rows = 4; // Number of rows (increase this for finer pieces)
    const cols = 4; // Number of columns
    const pieceArray = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        pieceArray.push({ row, col });
      }
    }

    setPieces(pieceArray);
  }, []);


  return (
    <div className="section">
      <div className="container">
        {/* Back Link */}
        <div className="back-link mb-8 inline-flex items-center space-x-2 rounded-3xl px-4 py-2 border-2 border-white">
          <a className="back-link-text inline-flex items-center text-dark hover:text-primary transition-colors duration-300" href="#" onClick={() => window.history.back()}>
            <svg
              className="back-arrow mr-1.5 transition-colors duration-300"
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.29289 11.7071C8.68342 12.0976 9.31658 12.0976 9.70711 11.7071C10.0976 11.3166 10.0976 10.6834 9.70711 10.2929L6.41421 7L9.70711 3.70711C10.0976 3.31658 10.0976 2.68342 9.70711 2.29289C9.31658 1.90237 8.68342 1.90237 8.29289 2.29289L4.29289 6.29289C3.90237 6.68342 3.90237 7.31658 4.29289 7.70711L8.29289 11.7071Z"
                fill="black"
              />
            </svg>
            <span className="text-sm leading-none">Back</span>
          </a>
        </div>

        {/* Outer Div with white border */}
        <div className="service-content border-2 border-white p-4 flex flex-wrap lg:flex-nowrap mb-in-perc-7">
          {/* Left side (Text content) */}
          <div className="text-content lg:w-1/2">

            <p className="mt-3">
                Welcome to the International Experience Canada (IEC) Program: Your
                Gateway to Adventure and Career Growth
            </p>
            <h5>Discover the International Experience Canada Program</h5>
            <p className="mt-6">
                The International Experience Canada (IEC) program offers young individuals from around 
                the world the opportunity to travel, work, and live in Canada. Whether you're looking to 
                gain work experience, explore new cultures, or enhance your career, the IEC program provides 
                a unique pathway to experiencing all that Canada has to offer.
            </p>
            
          </div>

          {/* Right side (Image) */}
          <div className="image-content lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <img className="mx-auto lmia-image" src={s1} alt="" />
          </div>
        </div>
      </div>

      <div class="container mb-in-perc-7">
            <div class="row">
                <div class="mx-auto text-center lg:col-7">
                    <h2 className='heading-color'>
                        What is the International Experience Canada (IEC) Program?
                    </h2>
                    <p class="mt-4">
                        The IEC program is designed to allow young people from eligible countries
                        to come to Canada for a temporary stay. This program provides three main
                        categories to suit different goals and experiences:
                    </p>
                </div>
            </div>
      
            
            <div className="content-wrapper mb-in-perc-7">
                {/* Left side div */}
                <div className='left-side-div'>
                    <div className="heading-left-item">
                        <h3>Key Features</h3>
                    </div>
                    <div className="left-div">
            
                        <div className="left-item">
                            <div className="image-wrapper">
                                <img src={s2} alt="Image 1" />
                            </div>
                            <div className="line-container">
                                <div className="thick-line"></div>
                                <div className="thin-line"></div>
                            </div>
                        </div>
                        <div className="left-item">
                            <div className="image-wrapper">
                                <img src={s3} alt="Image 2" />
                            </div>
                            <div className="line-container">
                                <div className="thick-line"></div>
                                <div className="thin-line"></div>
                            </div>
                        </div>
                        <div className="left-item">
                            <div className="image-wrapper">
                                <img src={s4} alt="Image 3" />
                            </div>
                            <div className="line-container">
                                <div className="thick-line"></div>
                                <div className="thin-line"></div>
                            </div>
                        </div>
                        <div className="left-item">
                            <div className="image-wrapper">
                                <img src={s5} alt="Image 4" />
                            </div>
                            <div className="line-container">
                                <div className="thick-line"></div>
                                <div className="thin-line"></div>
                            </div>
                        </div>
          
                    </div>
                    <div className="left-item-button-div">
                        <button className='left-item-button'></button>
                    </div>
                </div>
                {/* Right side div */}
                <div className="right-div">
                    <div className="right-item">
                        <div className="ri-wrapper">
                            <div className="right-image-wrapper">
                                <i class="fa fa-check icon-style" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="text-wrapper">
                            <h6>Work and Travel:</h6>
                            <p>Opportunities to work and travel across Canada.</p>
                        </div>
                    </div>
                    <div className="right-item">
                        <div className="ri-wrapper">
                            <div className="right-image-wrapper">
                                <i class="fa fa-briefcase icon-style"></i>
                            </div>
                        </div>
                        <div className="text-wrapper">
                            <h6>Cultural Exchange:</h6>
                            <p>Experience Canadian culture and meet people from diverse backgrounds.</p>
                        </div>
                    </div>
                    <div className="right-item">
            
                        <div className="ri-wrapper">
                            <div className="right-image-wrapper">
                                <i class="fa fa-file-alt icon-style"></i>

                            </div>
                        </div>
                        <div className="text-wrapper">
                            <h6>Career Development:</h6>
                            <p>Gain valuable work experience that can enhance your resume.</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="apply-content-wrapper mb-in-perc-7">

                <div className="apply-right-div">
                    <div className="zoom-image-container">
                        <img src={s7} alt="Zooming Image" className="zoom-image" />
                    </div>
                </div>


                <div className="apply-left-div">
                    {/* <h3>Eligibility Criteria for LMIA</h3>
                    <h5>For Employers :</h5> */}
                        <h1 className="mb-4">Eligibility Requirements</h1>
                        <p>To participate in the IEC program, you must meet the following general criteria:</p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Age:</span>
                                Be between 18 and 35 years old (age limits vary by country).
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Citizenship:</span>                            
                                Be a citizen of an eligible IEC country or territory.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Health:</span>
                                Be in good health and able to provide medical proof if required.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Financial Support:</span>
                                Have sufficient funds to support yourself upon arrival in Canada.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Travel Insurance:</span>
                                Obtain comprehensive health insurance for the duration of your stay.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            {/* <i className="fa fa-check text-primary me-3"></i> */}
                            <span>
                                <span className='about-sub me-1'>Note:</span>
                                Specific eligibility requirements may vary depending on your country
                                of citizenship and the category you are applying for.
                            </span>
                        </p>
                </div>
            </div>

            <div className="apply-content-wrapper mb-in-perc-7">
                <div className="apply-left-div">
                    {/* <h3>Eligibility Criteria for LMIA</h3>
                    <h5>For Employers :</h5> */}
                        <h1 className="mb-4">Categories of the IEC Program</h1>
                        <p>The IEC program offers three main categories, each designed to meet different 
                            needs and goals:</p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Working Holiday:</span>
                                <p className='d-flex align-items-baseline'>
                                    <i className="fa fa-check text-primary me-3"></i>
                                    <span>
                                        <span className='about-sub me-1'>Description:</span>
                                        Allows you to work for any employer in Canada and travel throughout 
                                        the country.
                                    </span>    
                                </p>
                                <p className='d-flex align-items-baseline'>
                                    <i className="fa fa-check text-primary me-3"></i>
                                    <span>
                                        <span className='about-sub me-1'>Ideal For:</span>
                                        Individuals seeking a mix of work and travel experiences.
                                    </span>    
                                </p>
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Young Professionals:</span>
                                <p className='d-flex align-items-baseline'>
                                    <i className="fa fa-check text-primary me-3"></i>
                                    <span>
                                        <span className='about-sub me-1'>Description:</span>
                                        Provides an opportunity to gain professional work experience with a 
                                        Canadian employer in your field of study or career.
                                    </span>    
                                </p>
                                <p className='d-flex align-items-baseline'>
                                    <i className="fa fa-check text-primary me-3"></i>
                                    <span>
                                        <span className='about-sub me-1'>Ideal For:</span>
                                        Individuals looking to advance their careers and gain international 
                                        work experience.
                                    </span>    
                                </p>
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>International Co-op (Internship):</span>
                                <p className='d-flex align-items-baseline'>
                                    <i className="fa fa-check text-primary me-3"></i>
                                    <span>
                                        <span className='about-sub me-1'>Description:</span>
                                        Offers work placements related to your field of study in Canada.
                                    </span>    
                                </p>
                                <p className='d-flex align-items-baseline'>
                                    <i className="fa fa-check text-primary me-3"></i>
                                    <span>
                                        <span className='about-sub me-1'>Ideal For:</span>
                                        Students and recent graduates who need to complete an internship or 
                                        co-op placement as part of their academic program.
                                    </span>    
                                </p>
                            </span>    
                        </p>
                        
                </div>

                <div className="apply-right-div">
                    <div className="benefits-image-container">
                        <img src={s7} alt="Large" className="benefits-large-image" />
                        <img src={s8} alt="Small" className="benefits-small-image" />
                    </div>
                </div>
            </div>

            <div className="apply-content-wrapper mb-in-perc-7">
                <div className="apply-left-div">
                    {/* <h3>Eligibility Criteria for LMIA</h3>
                    <h5>For Employers :</h5> */}
                        <h1 className="mb-4">How to Apply for the IEC Program</h1>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Check Eligibility:</span>
                                Confirm that you meet the eligibility requirements for
                                your country and category.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Create a Profile:</span>                            
                                Submit an online profile through the IEC portal to enter the pool of 
                                candidates.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Receive an Invitation:</span>
                                If selected, receive an invitation to apply for a work permit.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Submit Your Application:</span>
                                Complete and submit your application, including all required documents.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Obtain a Work Permit:</span>
                                Upon approval, receive your work permit and prepare for your journey 
                                to Canada.
                            </span>
                        </p>
                </div>

                <div className="apply-right-div">
                    <div className="benefits-image-container">
                        <img src={s7} alt="Large" className="benefits-large-image" />
                        <img src={s8} alt="Small" className="benefits-small-image" />
                    </div>
                </div>
            </div>

            <div className="apply-content-wrapper mb-in-perc-7">
                <div className="apply-left-div">
                    {/* <h3>Eligibility Criteria for LMIA</h3>
                    <h5>For Employers :</h5> */}
                        <h6 className="mb-4">Benefits of the IEC Program</h6>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Cultural Experience:</span>
                                Immerse yourself in Canadian culture and explore diverse regions.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Career Enhancement:</span>
                                Gain valuable international work experience that can boost your resume.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Networking Opportunities:</span>
                                Meet and connect with people from around the world.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Adventure:</span>
                                Experience the beauty and excitement of Canada, from vibrant cities to 
                                stunning landscapes.
                            </span>
                        </p>
                        
                </div>

                <div className="apply-right-div">
                    <div className="benefits-image-container">
                        <img src={s7} alt="Large" className="benefits-large-image" />
                        <img src={s8} alt="Small" className="benefits-small-image" />
                    </div>
                </div>
            </div>


            <div className="expert-content-wrapper mb-in-perc-7">
                <div className="expert-left-div">
                    <h2>Get Started with the IEC Program</h2>
                </div>
                <div className="expert-right-div">
                    <p>
                        Are you ready to embark on an unforgettable adventure in Canada? Apply for the 
                        International Experience Canada program today and take the first step towards a 
                        transformative experience.
                    </p>
                </div>
        
            </div>
    </div>
    </div>
  );
}

export default WorkAndTravelPermit;
