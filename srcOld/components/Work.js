
import Header from "./Header";
import "../css/student.css";
import Preparation from "../images/Preparation.png";
import Application from "../images/Application.png";
import Processing from "../images/Processing.png";
import Arrival from "../images/Arrival.png";

function Work(){
    return(
        <div>
            <div class="visa">
                <div class="service_heading">
                    <h2>Work Visa</h2>
                </div>
                <div class="service_content">
                    <p>
                        Seeking to work and reside in Canada? 
                        Look no further than Centilium Immigration, 
                        your trusted partner for all immigration-related matters. 

                        The Canadian government provides various options for both temporary and permanent work permits, 
                        ensuring a range of choices for aspiring individuals. 

        
                        Having a Canadian employer willing to sponsor your immigration journey is a significant advantage, 
                        and our company is equipped with a team of skilled in-house recruiters to assist job seekers. 
                        As licensed professionals in Canada, 
                        we offer overseas clients direct and reliable support, 
                        facilitating your migration to Canada. 
                        Whether you specialize in manufacturing, engineering, information technology, construction, transportation, skilled trades, or healthcare, 
                        we possess the expertise to guide you every step of the way. 
                        

                    </p>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img src={Preparation} alt="title" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Research & Preparation</h3>
                            <ul className="card-list">
                                <li>Research destination country's visa requirements for work travelers</li>
                                <li>Prepare necessary work documents (employment contracts, job offer letters, etc.)</li>
                                <li>Understand the visa application process and eligibility criteria</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Application} alt="title" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Visa Application</h3>
                            <ul className="card-list">
                                <li>Complete visa application form</li>
                                <li>Gather required work documents (employment contracts, qualifications, etc.)</li>
                                <li>Submit visa application and pay application fee</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Processing} alt="title" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Visa Processing</h3>
                            <ul className="card-list">
                                <li>Wait for processing</li>
                                <li>Track application status</li>
                                <li>Await visa approval</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Arrival} alt="title" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Pre-Departure & Arrival</h3>
                            <ul className="card-list">
                                <li>Receive visa approval</li>
                                <li>Make travel arrangements</li>
                                <li>Prepare for work responsibilities</li>
                                <li>Arrive at destination and begin work activities</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="service_content">
                    <p>
                        Centilium Immigration specializes in providing comprehensive assistance with 
                        work visa applications. Our services include:
                    
                        Evaluation and Eligibility Assessment: 
                        We assess your qualifications, skills, and experience to determine your 
                        eligibility for various work visa programs in Canada.

                        Job Placement Services: 
                        Our team assists in connecting you with Canadian employers who are seeking 
                        skilled workers, increasing your chances of securing employment sponsorship.
                        Document Preparation and Submission: We guide you through the process of 
                        gathering and preparing the necessary documents for your work visa application, 
                        ensuring all requirements are met before submission.

                        Application Tracking and Follow-Up: 
                        We monitor the progress of your visa application and provide regular updates, 
                        as well as follow up with immigration authorities on your behalf to expedite 
                        the process whenever possible.

                        Post-Arrival Support: 
                        Once your work visa is approved and you arrive in Canada, we continue to offer 
                        support and assistance to ensure a smooth transition and integration into your 
                        new life and workplace.

                        With Centilium Immigration, you can trust that your work visa application will 
                        be handled efficiently and professionally, paving the way for a successful 
                        career and life in Canada.
                        

                    </p>
                </div>

            </div>
        </div>
    );
}
export default Work;



// Visa Information
  