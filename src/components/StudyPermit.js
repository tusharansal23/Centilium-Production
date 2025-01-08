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
import s9 from "../images/sp1.jpg";
import s10 from "../images/sp2.jpg";
import s11 from "../images/sp3.jpg";
import s12 from "../images/sp4.jpg";
import s13 from "../images/sp8.jpg";

function StudyPermit() {
  const [selectedVisa, setSelectedVisa] = useState('StudyPermit');
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
                Explore Opportunities with a Canadian Study Permit
            </p>
            <p className="mt-6">
                Canada is renowned for its world-class education system, diverse academic
                programs, and vibrant student life. If you’re considering studying in Canada,
                a Study Permit is your ticket to experiencing all that Canadian education has
                to offer. Learn how you can apply and make the most of your educational
                journey!
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
                        What is a Study Permit?
                    </h2>
                    <p class="mt-4">
                        A Study Permit is an official document issued by the Canadian government
                        that allows international students to study at designated learning institutions
                        (DLIs) in Canada. It’s essential for anyone planning to study in Canada for
                        more than six months.
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
                            <h6>Temporary Resident Status:</h6>
                            <p>Allows you to reside in Canada for the duration of your studies.</p>
                        </div>
                    </div>
                    <div className="right-item">
                        <div className="ri-wrapper">
                            <div className="right-image-wrapper">
                                <i class="fa fa-briefcase icon-style"></i>
                            </div>
                        </div>
                        <div className="text-wrapper">
                            <h6>Work Opportunities:</h6>
                            <p>Permits on-campus and, in many cases, off-campus work while studying.</p>
                        </div>
                    </div>
                    <div className="right-item">
            
                        <div className="ri-wrapper">
                            <div className="right-image-wrapper">
                                <i class="fa fa-file-alt icon-style"></i>

                            </div>
                        </div>
                        <div className="text-wrapper">
                            <h6>Family Accompaniment:</h6>
                            <p>Eligible family members may accompany you to Canada.</p>
                        </div>
                    </div>
                </div>
            </div>
      
            <div className="apply-content-wrapper mb-in-perc-7">
                <div className="apply-left-div">
                    {/* <h3>Eligibility Criteria for LMIA</h3>
                    <h5>For Employers :</h5> */}
                        <h1 className="mb-4">Eligibility Requirements</h1>
                        <h5 className="ml-30">To apply for a Study Permit, you need to meet certain criteria. 
                                                Here’s an overview of what you’ll need:</h5>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Acceptance Letter:</span>
                                Proof of acceptance from a Designated Learning Institution (DLI) in Canada.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Proof of Identity:</span>                            
                                A valid passport or travel document.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Proof of Funds:</span>
                                Evidence that you can support yourself and any accompanying family members financially
                                during your stay.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>No Criminal Record:</span>
                                A police certificate may be required to prove that you have no criminal background.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Medical Exam:</span>
                                Depending on your country of residence, you may need to undergo a medical exam.
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
                        <img src={s9} alt="Zooming Image" className="zoom-image" />
                    </div>
                </div>


                <div className="apply-left-div">
                    {/* <h3>Eligibility Criteria for LMIA</h3>
                    <h5>For Employers :</h5> */}
                        <h1 className="mb-4">How to Apply for a Study Permit</h1>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Check Your Eligibility:</span>
                                Review the requirements and ensure you meet all
                                criteria.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Gather Documents:</span>                            
                                Prepare all necessary documents, including your
                                acceptance letter, proof of funds, and identification.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Apply Online or on Paper:</span>
                                Submit your application through the Immigration, Refugees and 
                                Citizenship Canada (IRCC) website or by mail.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Attend an Interview (if required):</span>
                                You may be asked to attend an interview
                                at a Canadian embassy or consulate.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Wait for a Decision:</span>
                                Your application will be processed, and you’ll receive a
                                decision on your Study Permit.
                            </span>    
                        </p>
                </div>
            </div>

            <div className="apply-content-wrapper mb-in-perc-7">
                <div className="apply-left-div">
                    {/* <h3>Eligibility Criteria for LMIA</h3>
                    <h5>For Employers :</h5> */}
                        <h1 className="mb-4">What to Expect After Arrival</h1>
                        <h6 className="mb-4">Upon arriving in Canada, you should:</h6>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Report to Your Institution:</span>
                                Check in with your DLI and confirm your enrollment.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Obtain a Study Permit:</span>                            
                                You may need to show your Study Permit
                                approval letter at the port of entry.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Explore Your New City:</span>
                                Take time to get familiar with your
                                surroundings and connect with local student resources.
                            </span>
                        </p>
                        
                </div>

                <div className="apply-right-div">
                    <div class="arrival-container">
                        <img src={s10} alt="Image 1" class="sliding-image"/>
                        <img src={s11} alt="Image 2" class="sliding-image"/>
                        <img src={s12} alt="Image 3" class="sliding-image"/>
                    </div>
                </div>
            </div>

                <div className="apply-content-wrapper mb-in-perc-7">
                    <div className="apply-right-div">
                        <div class="workStudy-container">
                            <div class="rotating-image"></div>
                        </div>
                    </div>
                    <div className="apply-left-div">
                        {/* <h3>Eligibility Criteria for LMIA</h3>
                        <h5>For Employers :</h5> */}
                        <h1 className="mb-4">Work While Studying</h1>
                        <h6 className="mb-4">With a Study Permit, you may be eligible to work:</h6>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>On-Campus Work:</span>
                                Jobs at your institution without needing a
                                separate work permit.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Off-Campus Work:</span>                            
                                Up to 20 hours per week during academic
                                sessions and full-time during scheduled breaks.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            {/* <i className="fa fa-check text-primary me-3"></i> */}
                            <span>
                                <span className='about-sub me-1'>Note:</span>
                                Ensure you meet all requirements and conditions for working
                                while studying.
                            </span>
                        </p>
                        
                    </div>
                </div>

            
                <div className="apply-content-wrapper mb-in-perc-7">
                    <div className="apply-left-div">
                        {/* <h3>Eligibility Criteria for LMIA</h3>
                        <h5>For Employers :</h5> */}
                        <h1 className="mb-4">Bringing Your Family</h1>
                        <p className="mb-4">If you have a spouse or children, they may be able to 
                            accompany you to Canada. Your spouse may be eligible for an open work permit, 
                            and your children may attend school.</p>

                        <h5 className="mb-4">Why Choose Canada for Your Studies?</h5>
                        <p className="mb-4">Canada offers a high standard of education and a welcoming 
                            environment for international students.</p>
                        <h5>Benefits of Studying in Canada:</h5>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Top-Ranked Institutions:</span>
                                World-renowned universities and colleges.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Diverse Culture:</span>                            
                                A multicultural society that celebrates diversity.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Safe Environment:</span>
                                Known for its safety and high quality of life.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Post-Graduation Opportunities:</span>
                                Potential pathways to work and stay in Canada after graduation.
                            </span>
                        </p>
                        
                    </div>

                    <div className="apply-right-div">
                        <div className="benefits-image-container">
                            <img src={s13} alt="Large" className="benefits-large-image" />
                        </div>
                    </div>
                </div>


            <div className="expert-content-wrapper mb-in-perc-7">
                <div className="expert-left-div">
                    <h2>Get Started with Your Study Permit Application</h2>
                </div>
                <div className="expert-right-div">
                    <p>
                        Ready to embark on your educational adventure in Canada? Start
                        your Study Permit application today and take the first step towards
                        an enriching academic experience.
                    </p>
                </div>
        
            </div>
    </div>

    </div>
  );
}

export default StudyPermit;
