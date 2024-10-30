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

function StartUpVisa() {
  const [selectedVisa, setSelectedVisa] = useState('StartUpVisa');
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
    <section className="section">
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
                Welcome to Canada's Start-Up Visa Program: Transform Your
                Business Idea into Reality
            </p>
            <h5>
                Turn Your Innovative Idea into a Canadian Success
            </h5>
            <p className="mt-6">
                Canada’s Start-Up Visa Program is designed to attract entrepreneurial
                talent and support innovative businesses. If you have a
                groundbreaking business idea and want to start or grow your
                company in Canada, this program provides a unique opportunity to
                establish your business and make a mark in one of the most dynamic
                economies in the world.
            </p>
            <a className="btn btn-primary mt-6" href="#">
              Download The Theme
            </a>
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
            What is the Start-Up Visa Program?
        </h2>
        <p class="mt-4">
            The Start-Up Visa Program is an immigration pathway for entrepreneurs
            who want to launch and run a business in Canada. It offers permanent
            residency to individuals with innovative business ideas that have the
            potential to create jobs and contribute to the Canadian economy.
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
              <h6>Permanent Residency:</h6>
              <p>Successful applicants and their families receive permanent resident status.</p>
            </div>
          </div>
          <div className="right-item">
            <div className="ri-wrapper">
                <div className="right-image-wrapper">
                <i class="fa fa-briefcase icon-style"></i>
                </div>
            </div>
            <div className="text-wrapper">
              <h6>Business Innovation:</h6>
              <p>Focus on supporting innovative businesses that have potential for growth.</p>
            </div>
          </div>
          <div className="right-item">
            
            <div className="ri-wrapper">
                <div className="right-image-wrapper">
                <i class="fa fa-file-alt icon-style"></i>

                </div>
            </div>
            <div className="text-wrapper">
              <h6>Supportive Ecosystem:</h6>
              <p>Access to Canadian resources, networks, and funding opportunities.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="apply-content-wrapper mb-in-perc-7">
        <div className="apply-left-div">
            {/* <h3>Eligibility Criteria for LMIA</h3>
            <h5>For Employers :</h5> */}
                        <h1 className="mb-4">Eligibility Requirements</h1>
                        <h5 className="ml-30">To qualify for the Start-Up Visa Program, you must meet the 
                            following criteria:</h5>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Innovative Business Idea:</span>
                                Your business idea must be unique and have the potential to succeed in 
                                Canada’s competitive market.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Support from a Designated Organization:</span>                            
                                Secure support from one of Canada’s designated venture capital funds, 
                                angel investor groups, or business incubators.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Language Proficiency:</span>
                                Demonstrate proficiency in English or French through an approved language test.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Sufficient Funds:</span>
                                Show that you have enough money to support yourself and your dependents while 
                                settling in Canada.
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
                        <h1 className="mb-4">How to Apply for the Start-Up Visa</h1>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Develop Your Business Idea:</span>
                                Ensure your business concept is innovative and has a solid plan for growth.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Secure Support:</span>                            
                                Obtain a letter of support from a designated organization
                                in Canada that is willing to invest in or incubate your business.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Prepare Your Application:</span>
                                Gather necessary documents, including proof of language proficiency, 
                                financial resources, and your letter of support.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Submit Your Application:</span>
                                Apply online through the Immigration, Refugees and Citizenship Canada 
                                (IRCC) portal or by mail.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Await a Decision:</span>
                                Your application will be processed, and you will be notified of the decision.
                            </span>    
                        </p>
        </div>
      </div>

      <div className="apply-content-wrapper mb-in-perc-7">
        <div className="apply-left-div">
            {/* <h3>Eligibility Criteria for LMIA</h3>
            <h5>For Employers :</h5> */}
                        <h1 className="mb-4">Benefits of a Start Up Visa</h1>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Experience Canada:</span>
                                Explore Canada’s natural beauty, landmarks, and cultural attractions.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Reconnect with Family:</span>                            
                                Visit family and friends residing in Canada.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Business Opportunities:</span>
                                Engage in business-related activities and networking.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Flexible Duration:</span>
                                Stay in Canada for up to 6 months, with the possibility of extension if needed.
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

      <div className="qa-content-wrapper mb-in-perc-7">
        <h1>Common Questions About Visitor Visas</h1>
        <div className="qa-card-container">
            <div className="qa-card">
                <h4>How long does it take to process a Visitor Visa application?</h4>
                <p>
                    Processing times can vary based on your country of residence and the
                    volume of applications. Apply well in advance of your planned travel
                    date to avoid delays.
                </p>
            </div>
            <div className="qa-card">
                <h4>Can I extend my stay in Canada with a Visitor Visa?</h4>
                <p>
                    Yes, you may apply for an extension if you wish to stay longer. 
                    Ensure you apply before your current visa expires.
                </p>
            </div>
            <div className="qa-card">
                <h4>What should I do if my Visitor Visa application is denied?</h4>
                <p>
                    If denied, you may be able to appeal the decision or reapply with 
                    additional supporting documents.
                </p>
            </div>
        </div>
      </div>
      <div className="expert-content-wrapper mb-in-perc-7">
        <div className="expert-left-div">
                <h2>Get Professional Assistance with Your Visitor Visa Application</h2>
        </div>
        <div className="expert-right-div">
                <p>
                    Navigating the visitor visa application process can be complex. At
                    Centilium Immigration, our experienced consultants are here to assist
                    you with every step, ensuring your application is complete and
                    accurate.
                </p>
        </div>
        
      </div>
  </div>


    </section>
  );
}

export default StartUpVisa;
