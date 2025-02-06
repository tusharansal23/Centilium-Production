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

function FamilySponsorship() {
  const [selectedVisa, setSelectedVisa] = useState('FamilySponsorship');
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
                Welcome to Canada’s Family Sponsorship Program: Reunite with
                Your Loved Ones
            </p>
            <h5>Reunite with Your Family in Canada</h5>
            <p className="mt-6">
                Canada values family unity and understands the importance of being
                together with loved ones. The Family Sponsorship program allows
                Canadian citizens and permanent residents to sponsor family
                members to come to Canada and become permanent residents.
                Discover how you can bring your family closer and enjoy life together
                in Canada.
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
                        What is the Family Sponsorship Program?
                    </h2>
                    <p class="mt-4">
                        The Family Sponsorship program is a pathway for Canadian citizens and
                        permanent residents to sponsor certain family members for permanent
                        residence in Canada. This program aims to keep families together and
                        strengthen Canadian society by reuniting loved ones.
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
                            <h6>Family Reunification:</h6>
                            <p>Helps bring spouses, partners, children, parents, and
                                grandparents to Canada..</p>
                        </div>
                    </div>
                    <div className="right-item">
                        <div className="ri-wrapper">
                            <div className="right-image-wrapper">
                                <i class="fa fa-briefcase icon-style"></i>
                            </div>
                        </div>
                        <div className="text-wrapper">
                            <h6>Support for Integration:</h6>
                            <p>Sponsored family members receive permanent
                                resident status upon approval.</p>
                        </div>
                    </div>
                    <div className="right-item">
            
                        <div className="ri-wrapper">
                            <div className="right-image-wrapper">
                                <i class="fa fa-file-alt icon-style"></i>

                            </div>
                        </div>
                        <div className="text-wrapper">
                            <h6>Permanent Residency:</h6>
                            <p>Sponsored family members receive permanent
                                resident status upon approval.</p>
                        </div>
                    </div>
                </div>
            </div>
      
            <div className="apply-content-wrapper mb-in-perc-7">
                <div className="apply-left-div">
                    {/* <h3>Eligibility Criteria for LMIA</h3>
                    <h5>For Employers :</h5> */}
                        <h1 className="mb-4">Who Can You Sponsor?</h1>
                        <h5 className="ml-30">You can sponsor the following family members if you are a 
                        Canadian citizen or permanent resident:</h5>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Spouse or Common-Law Partner:</span>
                                Your legally married spouse or partner with whom you have been living 
                                together in a marital-like relationship.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Dependent Children:</span>                            
                                Children who are under 22 years old and are not
                                married or in a common-law relationship.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Parents and Grandparents:</span>
                                Parents or grandparents may be sponsored through the Parents and 
                                Grandparents Program (PGP), which has specific requirements and 
                                application processes.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Other Relatives:</span>
                                In some cases, you may also sponsor other relatives if there are 
                                exceptional circumstances.
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
                
                <div className="apply-left-div">
                    {/* <h3>Eligibility Criteria for LMIA</h3>
                    <h5>For Employers :</h5> */}
                        <h1 className="mb-4">Eligibility Requirements for Sponsors</h1>
                        <h5 className="ml-30">To be eligible to sponsor a family member, you must:</h5>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Be a Canadian Citizen or Permanent Resident:</span>
                                You must prove your status in Canada.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Meet Income Requirements:</span>                            
                                Demonstrate that you can provide financial
                                support to your sponsored family member(s) and ensure they do not rely
                                on social assistance.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Be Over 18 Years Old:</span>
                                Sponsors must be at least 18 years old.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Agree to Financial Responsibilities:</span>
                                Commit to providing financial support for your family member(s) and 
                                ensure they do not need to rely on government assistance.
                            </span>
                        </p>
                </div>
                
            </div>



            <div className="apply-content-wrapper mb-in-perc-7">
                <div className="apply-left-div">
                    {/* <h3>Eligibility Criteria for LMIA</h3>
                    <h5>For Employers :</h5> */}
                        <h1 className="mb-4">How to Apply for Family Sponsorship</h1>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Check Eligibility:</span>
                                Review the requirements for both the sponsor and the
                                person you wish to sponsor.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Gather Required Documents:</span>                            
                                Collect all necessary documents, including proof of relationship, 
                                financial documents, and identity verification.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Complete the Application:</span>
                                Fill out the application forms for sponsorship and submit them to 
                                Immigration, Refugees and Citizenship Canada (IRCC).
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Submit the Application Package:</span>
                                Send your completed application package
                                to the appropriate address or online portal.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Wait for Processing:</span>
                                The application will be reviewed, and you will receive
                                updates throughout the process.
                            </span>    
                        </p>
                </div>


                <div className="apply-right-div">
                    <div className="zoom-image-container">
                        <img src={s7} alt="Zooming Image" className="zoom-image" />
                    </div>
                </div>

            </div>

            <div className="apply-content-wrapper mb-in-perc-7">
                <div className="apply-right-div">
                    <div className="benefits-image-container">
                        <img src={s7} alt="Large" className="benefits-large-image" />
                        <img src={s8} alt="Small" className="benefits-small-image" />
                    </div>
                </div>
                <div className="apply-left-div">
                    {/* <h3>Eligibility Criteria for LMIA</h3>
                    <h5>For Employers :</h5> */}
                        <h1 className="mb-4">Processing Times and What to Expect</h1>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Application Processing:</span>
                                The time to process a family sponsorship application varies based on 
                                the type of sponsorship and the specific circumstances.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Medical and Security Checks:</span>                            
                                Sponsored individuals may be required to undergo medical examinations 
                                and security checks.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Decision:</span>
                                You will be notified once a decision has been made
                                regarding the sponsorship application.
                            </span>
                        </p>
                        
                </div>

            </div>

                <div className="apply-content-wrapper mb-in-perc-7">
                    <div className="apply-left-div">
                        {/* <h3>Eligibility Criteria for LMIA</h3>
                        <h5>For Employers :</h5> */}
                        <h1 className="mb-4">Supporting Your Family Members</h1>
                        <h6 className="mb-4">Once your family members arrive in Canada:</h6>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Settlement Services:</span>
                                They can access various settlement services, including language classes, 
                                job search assistance, and community support.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Health Care:</span>                            
                                They will be eligible for provincial health care coverage.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Integration:</span>
                                Encourage them to connect with local community
                                resources to help with their integration into Canadian life.
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
                    <div className="apply-right-div">
                        <div className="benefits-image-container">
                            <img src={s7} alt="Large" className="benefits-large-image" />
                            <img src={s8} alt="Small" className="benefits-small-image" />
                        </div>
                    </div>
                    <div className="apply-left-div">
                        {/* <h3>Eligibility Criteria for LMIA</h3>
                        <h5>For Employers :</h5> */}
                        <h1 className="mb-4">Why Sponsor Your Family to Canada?</h1>
                        <p className="mb-4">Sponsoring your family to Canada brings numerous benefits and
                            enhances your family’s quality of life:.</p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Family Unity:</span>
                                Enjoy the joy of living together and building a life in Canada.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Quality of Life:</span>                            
                                Access to high-quality healthcare, education, and social services.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Cultural Integration:</span>
                                Embrace a diverse and inclusive society.
                            </span>
                        </p>
                        
                    </div>

                </div>


            <div className="expert-content-wrapper mb-in-perc-7">
                <div className="expert-left-div">
                    <h2>Start Your Family Sponsorship Application Today</h2>
                </div>
                <div className="expert-right-div">
                    <p>
                        Ready to bring your loved ones to Canada? Begin your Family
                        Sponsorship application today and take the first step towards
                        reuniting with your family.
                    </p>
                </div>
        
            </div>
    </div>
    </div>
  );
}

export default FamilySponsorship;
