import React, { useState, useEffect } from 'react';
import "../css/Service.css";
import s1 from "../images/pnp1.jfif";
import s2 from "../images/emp-ver.jpg";
import s3 from "../images/emp-veri.jpg";
import s4 from "../images/lab-mark-needs.jpg";
import s5 from "../images/lab-mrk.jpg";
import s6 from "../images/pnp2.jpg";
import s7 from "../images/pnp5.jpg";
import s8 from "../images/pnp3.png";
import s9 from "../images/pnp9.jpg";
import s10 from "../images/pnp10.jpg";
import s11 from "../images/pnp11.jpg";
import s12 from "../images/pnp12.jpg";

function PNP() {
  const [selectedVisa, setSelectedVisa] = useState('PNP');
  const [isSwapped, setIsSwapped] = useState(false);
  const [pieces, setPieces] = useState([]);
  const [showLargeImage, setShowLargeImage] = useState(true);

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
    const interval = setInterval(() => {
      setShowLargeImage(prevShowLargeImage => !prevShowLargeImage);
    }, 2000); // Switch every 2 seconds

    return () => clearInterval(interval);
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
                Welcome to Canada’s Provincial Nominee Program (PNP): Your
                Pathway to Provincial Opportunities
            </p>
            <h5>Explore the Provincial Nominee Program</h5>
            <p className="mt-6">
                Canada's Provincial Nominee Program (PNP) offers a unique pathway for individuals 
                who want to live and work in specific provinces and territories. Each province and 
                territory has its own immigration streams designed to meet local labor market needs 
                and economic goals. Discover how the PNP can help you achieve your Canadian immigration goals.
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
                        What is the Provincial Nominee Program (PNP)?
                    </h2>
                    <p class="mt-4">
                        The PNP allows Canadian provinces and territories to nominate individuals
                        for permanent residence based on their skills, work experience, and ability
                        to contribute to the local economy. This program is ideal for those who
                        have a specific province or territory in mind and wish to settle there.
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
                            <h6>Provincial Nomination:</h6>
                            <p>Each province and territory can nominate candidates for permanent 
                                residence.</p>
                        </div>
                    </div>
                    <div className="right-item">
                        <div className="ri-wrapper">
                            <div className="right-image-wrapper">
                                <i class="fa fa-briefcase icon-style"></i>
                            </div>
                        </div>
                        <div className="text-wrapper">
                            <h6>Diverse Streams:</h6>
                            <p>Offers various streams for skilled workers, entrepreneurs, and graduates.</p>
                        </div>
                    </div>
                    <div className="right-item">
            
                        <div className="ri-wrapper">
                            <div className="right-image-wrapper">
                                <i class="fa fa-file-alt icon-style"></i>

                            </div>
                        </div>
                        <div className="text-wrapper">
                            <h6>Enhanced CRS Points:</h6>
                            <p>Provincial nominations can boost your Comprehensive Ranking System (CRS) 
                                score if applying through Express Entry.</p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="apply-content-wrapper mb-in-perc-7">

                <div className="apply-right-div">
                    <div className="zoom-image-container">
                        <img src={s6} alt="Zooming Image" className="zoom-image" />
                    </div>
                </div>


                <div className="apply-left-div">
                    {/* <h3>Eligibility Criteria for LMIA</h3>
                    <h5>For Employers :</h5> */}
                        <h1 className="mb-4">Eligibility Requirements</h1>
                        <p>Eligibility for the PNP varies depending on the province or territory and the
                            specific stream you are applying for. Generally, you must:</p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Meet Provincial Criteria:</span>
                                Each province has its own criteria, including work
                                experience, education, and language proficiency.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Demonstrate Intention to Settle:</span>                            
                                Show your intent to live and work in the nominating province or territory.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Work Experience and Skills:</span>
                                Have relevant work experience and skills that match the needs of the 
                                province or territory.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Note:</span>
                                Ensure you meet the specific requirements of the stream you are applying for.
                            </span>
                        </p>
                </div>
            </div>

            <div className="apply-content-wrapper mb-in-perc-7">
                <div className="apply-left-div">
                    {/* <h3>Eligibility Criteria for LMIA</h3>
                    <h5>For Employers :</h5> */}
                        <h1 className="mb-4">How to Apply for the PNP</h1>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Research Provincial Streams:</span>
                                Review the different provincial and territorial streams to find the one 
                                that aligns with your background and goals.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Prepare Your Application:</span>                            
                                Gather required documents, such as proof of work experience, education 
                                credentials, and language test results.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Submit Your Expression of Interest (EOI):</span>
                                Some provinces require you to submit an EOI to express your interest in 
                                their program.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Receive a Nomination:</span>
                                If selected, you will receive a provincial nomination certificate.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Apply for Permanent Residence:</span>
                                Use your nomination to apply for permanent residence through the federal 
                                immigration system or directly with the provincial authority.
                            </span>
                        </p>
                        
                </div>

                <div className="apply-right-div">
                    <div className="benefits-image-container">
                        <img src={s7} alt="Large" className="benefits-large-image" />
                        {/* <img src={s8} alt="Small" className="benefits-small-image" /> */}
                    </div>
                </div>
            </div>

            <div className="apply-content-wrapper mb-in-perc-7">

            <div className="apply-right-div">
                <div className="benefits-image-container">
                    <img
                        src={s9}
                        alt="Large"
                        className={`eligibility-large-image ${showLargeImage ? 'visible' : 'hidden'}`}
                    />
                    <img
                        src={s10}
                        alt="Small"
                        className={`eligibility-small-image ${showLargeImage ? 'hidden' : 'visible'}`}
                    />
                </div>
            </div>
                
                <div className="apply-left-div">
                    {/* <h3>Eligibility Criteria for LMIA</h3>
                    <h5>For Employers :</h5> */}
                        <h1 className="mb-4">Provincial and Territorial Streams</h1>
                        <p>Each province and territory has unique streams tailored to their specific 
                            needs. Some common categories include:</p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Skilled Worker Streams:</span>
                                For individuals with work experience in high-demand occupations.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Business and Entrepreneur Streams:</span>                            
                                For those looking to start or invest in a business.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>International Graduate Streams:</span>
                                For recent graduates from local educational institutions.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Express Entry Streams:</span>
                                For candidates in the federal Express Entry pool who receive a provincial 
                                nomination.
                            </span>
                        </p>
                </div>

                
            </div>

            <div className="apply-content-wrapper mb-in-perc-7">
                <div className="apply-left-div">
                    {/* <h3>Eligibility Criteria for LMIA</h3>
                    <h5>For Employers :</h5> */}
                        <h6 className="mb-4">Check the specific requirements and opportunities for each 
                        province and territory:</h6>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Alberta</span>
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>British Columbia</span>
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Manitoba</span>
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>New Brunswick</span>
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Newfoundland and Labrador</span>
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Northwest Territories</span>
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Nova Scotia</span>
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Ontario</span>
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Prince Edward Island</span>
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Quebec</span>
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Saskatchewan</span>
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Yukon</span>
                            </span>
                        </p>
                        
                </div>

                <div className="apply-right-div">
                    <div className="benefits-image-container">
                        <img src={s11} alt="Large" className="benefits-large-image" />
                        {/* <img src={s8} alt="Small" className="benefits-small-image" /> */}
                    </div>
                </div>
            </div>

            <div className="apply-content-wrapper mb-in-perc-7">

                <div className="apply-right-div">
                    <div className="benefits-image-container">
                        <img src={s12} alt="Large" className="benefits-large-image" />
                        {/* <img src={s8} alt="Small" className="benefits-small-image" /> */}
                    </div>
                </div>

                <div className="apply-left-div">
                    {/* <h3>Eligibility Criteria for LMIA</h3>
                    <h5>For Employers :</h5> */}
                        <h1 className="mb-4">Benefits of the PNP</h1>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Tailored Opportunities:</span>
                                Access to immigration pathways that meet local economic needs.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Increased Chances of Success:</span>                            
                                Provincial nominations can significantly enhance your chances of obtaining 
                                permanent residence.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Community Integration:</span>
                                Benefit from programs and resources designed to help you integrate into 
                                your new community.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Diverse Pathways:</span>
                                Choose from a variety of streams that match your skills, experience, 
                                and goals.
                            </span>
                        </p>
                        
                </div>
            </div>



            <div className="expert-content-wrapper mb-in-perc-7">
                <div className="expert-left-div">
                    <h2>Get Started with the Provincial Nominee Program</h2>
                </div>
                <div className="expert-right-div">
                    <p>
                    Ready to explore the opportunities available through the PNP? Begin your journey today 
                    and find the right pathway to make Canada your new home.
                    </p>
                </div>
        
            </div>
    </div>
    </div>
  );
}

export default PNP;
