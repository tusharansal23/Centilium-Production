
import Header from "./Header";
import "../css/student.css";
import Preparation from "../images/Preparation.png";
import Application from "../images/Application.png";
import Processing from "../images/Processing.png";
import Arrival from "../images/Arrival.png";

function Student(){
    return(
            <div class="visa">
                <div class="service_heading">
                    <h2>Student Visa</h2>
                </div>
                <div class="service_content">
                    <p>
                        Are you aspiring to pursue education in one of the world's most intellectually advanced destinations? 
                        Look no further than Canada, a country renowned for its welcoming and inclusive environment for international graduates. 
                        Discover a comprehensive range of top-rated schools, colleges, and universities in Canada, 
                        offering language programs and skill-focused courses tailored to your specific needs. 
                        Allow us to guide you through the intricacies of applying for a student visa, study permit, 
                        and TRV (Temporary Resident Visa) to embark on your educational journey in Canada. 
                        Explore the finest academic programs available at prestigious Canadian institutions, 
                        with over 450,000 international students obtaining study permits each year. 
                        With 25 institutions ranking among the world's top 500, 
                        Canada boasts exceptional academic institutions and cutting-edge research centers. 
                        Furthermore, pursuing education in Canada may open doors to opportunities with esteemed Canadian employers. 
                        If your ultimate goal is to become a permanent resident of Canada, 
                        enrolling in a reputable Canadian university or college presents the best pathway to success.

                    </p>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img src={Preparation} alt="title" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Preparation & Application</h3>
                            <ul className="card-list">
                                <li>Research & Choose a School/University</li>
                                <li>Apply for Admission</li>
                                <li>Receive Offer letter</li>
                                <li>Prepare financial documentation</li>
                                <li>Obtain Health Insurance</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Application} alt="title" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Visa Application</h3>
                            <ul className="card-list">
                                <li>Complete Visa Application Form</li>
                                <li>Gather Required Documents</li>
                                <li>Submit Visa Application & Documents</li>
                                <li>Provide Biometrics</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Processing} alt="title" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Visa Processing</h3>
                            <ul className="card-list">
                                <li>Wait for Processing</li>
                                <li>Track Application Status</li>
                                <li>Await Visa Approval</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Arrival} alt="title" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Pre-Departure & Arrival</h3>
                            <ul className="card-list">
                                <li>Receive Visa Approval</li>
                                <li>Travel Arrangements</li>
                                <li>Inform Local Authorities</li>
                                <li>Attend Orientation</li>
                                <li>Commence Studies</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="service_content">
                    <p>
                        Centilium Immigration offers comprehensive assistance to students 
                        aspiring to study in Canada. We provide personalized guidance 
                        throughout the application process, helping you secure admission 
                        to top-rated schools, colleges, and universities in Canada. 
                        Our team of experienced professionals assists with preparing your 
                        application materials, including academic transcripts, letters of 
                        recommendation, and personal statements. Additionally, we provide 
                        expert support in navigating the student visa application process, 
                        ensuring that you have all the necessary documentation and 
                        information to apply for a study permit and TRV (Temporary Resident Visa). 
                        With Centilium Immigration by your side, you can embark on your 
                        educational journey in Canada with confidence.
                    </p>
                </div>
            </div>
    );
}
export default Student;