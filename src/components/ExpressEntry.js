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

function ExpressEntry() {
  const [selectedVisa, setSelectedVisa] = useState('ExpressEntry');
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
                Welcome to the Express Entry Program: Your Gateway to Canadian Immigration
            </p>
            <h5>Discover Canada’s Express Entry Program</h5>
            <p className="mt-6">
                Canada is known for its welcoming environment, diverse culture, and
                strong economy. If you’re looking to live and work in Canada, the Express
                Entry program offers a streamlined pathway for skilled workers to become
                permanent residents. Here’s everything you need to know to get started!
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
                        What is the Express Entry Program?
                    </h2>
                    <p class="mt-4">
                        The Express Entry program is an immigration system designed to manage
                        applications for permanent residence from skilled workers. It’s a fast and
                        efficient way to bring talented individuals to Canada, helping to address
                        labor market needs and boost the Canadian economy.
                    </p>
                </div>
            </div>
      
            
            <div className="apply-content-wrapper mb-in-perc-7">
                <div className="apply-left-div">
                    {/* <h3>Eligibility Criteria for LMIA</h3>
                    <h5>For Employers :</h5> */}
                        <h5 className="ml-30">To be eligible for the Express Entry program, you must meet 
                        specific criteria related to your professional experience, education, and language 
                        abilities. Here’s a general overview:</h5>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Professional Experience:</span>
                                Relevant work experience in a skilled occupation.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Education:</span>                            
                                Credential assessments for your educational qualifications.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Language Proficiency:</span>
                                Demonstrate language skills in English or French through approved tests.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Proof of Funds:</span>
                                Show that you have sufficient funds to support yourself and your family 
                                upon arrival in Canada (if applicable).
                            </span>
                        </p>
                </div>
                <div className="apply-right-div">
                    <div className="apply-image-wrapper">
                        {isSwapped ? (
                        <>
                            <img src={s7} alt="Small Image" className="apply-large-image" />
                            <img src={s8} alt="Large Image" className="apply-small-image" />
                        </>
                        ) : (
                        <>
                            <img src={s8} alt="Large Image" className="apply-large-image" />
                            <img src={s7} alt="Small Image" className="apply-small-image" />
                        </>
                        )}
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
                        <h1 className="mb-4">How the Express Entry Process Works</h1>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Determine Your Eligibility:</span>
                                Check if you meet the requirements for one of the Express Entry programs.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Create an Online Profile:</span>                            
                                Submit your profile through the Express Entry system, detailing your 
                                qualifications and experience.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Receive an Invitation to Apply (ITA):</span>
                                If you meet the CRS cut-off score, you will receive an ITA to apply for 
                                permanent residence.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Submit Your Application:</span>
                                Complete and submit your application for permanent residence, along with 
                                required documents.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Await Decision:</span>
                                The Canadian government will process your application and provide a decision.
                            </span>    
                        </p>
                </div>
            </div>

            <div className="apply-content-wrapper mb-in-perc-7">
                <div className="apply-left-div">
                    {/* <h3>Eligibility Criteria for LMIA</h3>
                    <h5>For Employers :</h5> */}
                        <h1 className="mb-4">Tips for a Successful Application</h1>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Improve Your CRS Score:</span>
                                Enhance your profile by gaining additional work experience, 
                                improving language skills, or obtaining higher education.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Stay Informed:</span>                            
                                Keep up-to-date with changes in immigration policies and requirements.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Seek Professional Advice:</span>
                                Consider consulting with a licensed immigration consultant or lawyer 
                                to ensure your application is as strong as possible.
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
                    <h2>Get Started Today!</h2>
                </div>
                <div className="expert-right-div">
                    <p>
                        Ready to take the next step towards living and working in Canada?
                        Create your Express Entry profile today and start your journey
                        towards Canadian permanent residency.
                    </p>
                </div>
        
            </div>
    </div>
    </div>
  );
}

export default ExpressEntry;
