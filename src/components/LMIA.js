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

function LMIA() {
  const [selectedVisa, setSelectedVisa] = useState('LMIA');
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
                Welcome to Centilium Immigration: Your Expert Guide to Labour
                Market Impact Assessment (LMIA)
            </p>
            <h5>
                Understanding the Labour Market Impact Assessment (LMIA).
            </h5>
            <p className="mt-6">
                The Labour Market Impact Assessment (LMIA) is a crucial step for
                employers in Canada who wish to hire foreign workers. It ensures
                that hiring a foreign national will not negatively impact the Canadian
                labor market. At Centilium Immigration, we provide comprehensive
                support to navigate the LMIA process efficiently and successfully.
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
          What is an LMIA?
        </h2>
        <p class="mt-4">
            An LMIA is a document issued by Employment and Social Development Canada (ESDC) that verifies<br/> 
            whether hiring a foreign worker will have a positive, neutral, or negative impact on the Canadian<br/> 
            job market. A positive LMIA indicates that there is a genuine need for a foreign worker to fill<br/> 
            the position and that no Canadian citizen or permanent resident is available to do the job.
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
              <h6> Employment Verification</h6>
              <p>Confirms that the job offer meets Candian labor standard and wages</p>
            </div>
          </div>
          <div className="right-item">
            <div className="ri-wrapper">
                <div className="right-image-wrapper">
                <i class="fa fa-briefcase icon-style"></i>
                </div>
            </div>
            <div className="text-wrapper">
              <h6> Labor Market Needs</h6>
              <p>Assesses whether hiring a foreign worker addresses a labor shortage</p>
            </div>
          </div>
          <div className="right-item">
            
            <div className="ri-wrapper">
                <div className="right-image-wrapper">
                <i class="fa fa-file-alt icon-style"></i>

                </div>
            </div>
            <div className="text-wrapper">
              <h6> Temporary Work Permits</h6>
              <p>A Positive LMIA allows the foreign worker to apply for a temporary work permit</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="apply-content-wrapper mb-in-perc-7">
        <div className="apply-left-div">
            {/* <h3>Eligibility Criteria for LMIA</h3>
            <h5>For Employers :</h5> */}
                        <h1 className="mb-4">Eligibility Criteria for LMIA</h1>
                        <h5 className="ml-30">For Employers :</h5>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Business Operation:</span>
                                Your business must be operational and in good standing.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Job Offer:</span>                            
                                Provide a detailed job offer outlining the position, wages, 
                                and working conditions.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Recruitment Efforts:</span>
                                Demonstrate that you have made reasonable efforts to hire Canadian citizens
                                or permanent residents for the position.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Labor Market Impact:</span>
                                Show that hiring a foreign worker will not negatively impact the Canadian
                                labor market.
                            </span>
                        </p>

                        <h5 className="ml-30">For Foreign Workers:</h5>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Job Offer:</span>
                                You must have a valid job offer from a Canadian employer who has 
                                obtained a positive LMIA.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Work Permit Application:</span>                            
                                With a positive LMIA, you can apply for a temporary work permit to work
                                in Canada.
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
                        <h1 className="mb-4">How to Apply for an LMIA</h1>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Determine Need:</span>
                                Assess whether an LMIA is required for the position you
                                want to fill.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Prepare Documentation:</span>                            
                                Gather necessary documents, including a detailed
                                job description, proof of recruitment efforts, and business information.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Submit Application:</span>
                                Complete and submit your LMIA application to
                                Employment and Social Development Canada (ESDC).
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Await Decision:</span>
                                ESDC will process your application and provide a decision,
                                which could be positive, negative, or neutral.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Receive LMIA:</span>
                                If approved, you will receive a positive LMIA, allowing your
                                foreign worker to apply for a work permit.
                            </span>    
                        </p>
        </div>
      </div>

      <div className="apply-content-wrapper mb-in-perc-7">
        <div className="apply-left-div">
            {/* <h3>Eligibility Criteria for LMIA</h3>
            <h5>For Employers :</h5> */}
                        <h1 className="mb-4">Benefits of a Positive LMIA</h1>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Access to Global Talent:</span>
                                Fill skill gaps with qualified foreign workers.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Support Business Growth:</span>                            
                                Address labor shortages and improve
                                business operations.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Compliance with Regulations:</span>
                                Ensure that your hiring practices meet
                                Canadian labor market requirements.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Enhanced Recruitment:</span>
                                Attract skilled professionals from around the
                                world.
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
        <h1>Common LMIA-Related Questions</h1>
        <div className="qa-card-container">
            <div className="qa-card">
                <h3>What if my LMIA application is refused?</h3>
                <p>
                    If your application is refused, you may need to address the reasons 
                    for refusal and reapply or consider alternative immigration pathways.
                </p>
            </div>
            <div className="qa-card">
                <h3>How long does the LMIA process take?</h3>
                <p>
                    The processing time can vary based on the application type and ESDC’s workload. 
                    It is essential to apply well in advance of the intended employment start date.
                </p>
            </div>
            <div className="qa-card">
                <h3>Can I expedite the LMIA process?</h3>
                <p>
                    While there are no guaranteed methods to expedite the process, ensuring that your 
                    application is complete and accurate can help avoid delays.
                </p>
            </div>
        </div>
      </div>
      <div className="expert-content-wrapper mb-in-perc-7">
        <div className="expert-left-div">
                <h2>Get Expert Assistance with Your LMIA Application</h2>
        </div>
        <div className="expert-right-div">
                <p>
                Navigating the LMIA process can be complex. At Centilium Immigration, our 
                experienced consultants provide expert guidance to ensure that your LMIA 
                application is thorough and compliant with Canadian regulations.
                </p>
        </div>
        
      </div>
  </div>


    </section>
  );
}

export default LMIA;
