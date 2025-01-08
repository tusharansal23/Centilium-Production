import React, { useState, useEffect } from 'react';
import "../css/Service.css";
import s1 from "../images/service-lmia.jpg";
import s2 from "../images/emp-ver.jpg";
import s3 from "../images/emp-veri.jpg";
import s4 from "../images/lab-mark-needs.jpg";
import s5 from "../images/lab-mrk.jpg";
import s6 from "../images/temp-work-perm.jpg";
import s7 from "../images/vv1.jpg";
import s8 from "../images/vv2.jpg";
import s9 from "../images/vv3.jpg";
import s10 from "../images/vv4.jpg";


function VisitorVisa() {
  const [selectedVisa, setSelectedVisa] = useState('VisitorVisa');
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
                Welcome to Centilium Immigration: Your Guide to Visiting Canada
            </p>
            <h5>
                Explore Canada with a Visitor Visa
            </h5>
            <p className="mt-6">
                Canada welcomes millions of visitors each year to experience its
                vibrant cities, stunning landscapes, and diverse cultures. Whether
                you’re planning a short visit to see family, attend an event, or explore
                the beauty of Canada, a Visitor Visa is your gateway to an
                unforgettable journey. At Centilium Immigration, we provide expert
                guidance to help you navigate the visitor visa application process
                smoothly.
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
            What is a Visitor Visa?
        </h2>
        <p class="mt-4">
            A Visitor Visa, also known as a Temporary Resident Visa (TRV), allows
            individuals from foreign countries to enter Canada for a temporary stay.
            This visa is typically issued for tourism, business meetings, or family visits.
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
              <h6>Temporary Stay:</h6>
              <p>Visit Canada for up to 6 months.</p>
            </div>
          </div>
          <div className="right-item">
            <div className="ri-wrapper">
                <div className="right-image-wrapper">
                <i class="fa fa-briefcase icon-style"></i>
                </div>
            </div>
            <div className="text-wrapper">
              <h6>Tourism and Exploration:</h6>
              <p>Enjoy Canada’s attractions, landscapes, and cultural experiences.</p>
            </div>
          </div>
          <div className="right-item">
            
            <div className="ri-wrapper">
                <div className="right-image-wrapper">
                <i class="fa fa-file-alt icon-style"></i>

                </div>
            </div>
            <div className="text-wrapper">
              <h6>Family and Friends:</h6>
              <p>Spend time with loved ones living in Canada.</p>
            </div>
          </div>
          <div className="right-item">
            
            <div className="ri-wrapper">
                <div className="right-image-wrapper">
                <i class="fa fa-file-alt icon-style"></i>

                </div>
            </div>
            <div className="text-wrapper">
              <h6>Business Visits:</h6>
              <p>Attend meetings, conferences, or explore business opportunities.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="apply-content-wrapper mb-in-perc-7">
        <div className="apply-left-div">
            {/* <h3>Eligibility Criteria for LMIA</h3>
            <h5>For Employers :</h5> */}
                        <h1 className="mb-4">Eligibility Requirements for a Visitor Visa</h1>
                        <h5 className="ml-30">To be eligible for a Visitor Visa, you must:</h5>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Have a Valid Passport:</span>
                                Your passport should be valid for the duration of your stay in Canada.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Demonstrate Ties to Your Home Country:</span>                            
                                Prove that you have strong ties to your home country, such as employment, 
                                property, or family, to ensure you will return after your visit.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Show Proof of Financial Support:</span>
                                Provide evidence that you can financially support yourself and any dependents 
                                during your stay.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Have No Criminal Record:</span>
                                Provide a police clearance certificate if required.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Medical Examination:</span>
                                Undergo a medical examination if requested by Canadian
                                authorities.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Note:</span>                            
                                Additional requirements may apply depending on your nationality and the 
                                purpose of your visit.
                            </span>
                        </p>
        </div>
        <div className="apply-right-div">
          <div className="benefits-image-container">
            <img src={s8} alt="Large" className="benefits-large-image" />
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
                        <h1 className="mb-4">How to Apply for a Visitor Visa</h1>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Check Eligibility:</span>
                                Ensure you meet the eligibility criteria for a Visitor Visa.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Gather Documents:</span>                            
                                Collect necessary documents, including your passport, proof of financial 
                                support, travel itinerary, and any additional required documents.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Complete the Application:</span>
                                Fill out the application forms accurately and thoroughly.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Submit Your Application:</span>
                                Submit your completed application online or by mail to the Canadian 
                                immigration authorities.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Pay the Fee:</span>
                                Pay the application fee as required.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Attend an Interview (if applicable):</span>
                                You may be required to attend an interview at a Canadian embassy or consulate.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Await Decision:</span>
                                Wait for the decision on your visa application and receive your Visitor Visa 
                                if approved.
                            </span>    
                        </p>
        </div>
      </div>

      <div className="apply-content-wrapper mb-in-perc-7">
        <div className="apply-left-div">
            {/* <h3>Eligibility Criteria for LMIA</h3>
            <h5>For Employers :</h5> */}
                        <h1 className="mb-4">Benefits of a Visitor Visa</h1>
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
                <img src={s9} alt="Large" className="benefits-large-image" />
                <img src={s10} alt="Small" className="benefits-small-image" />
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

export default VisitorVisa;
