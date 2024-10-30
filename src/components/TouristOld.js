
import Header from "./Header";
import "../css/student.css";
import Preparation from "../images/Preparation.png";
import Application from "../images/Application.png";
import Processing from "../images/Processing.png";
import Arrival from "../images/Arrival.png";

function Tourist(){
    return(
        <div>
            <div class="visa">
                <div class="service_heading">
                    <h2>Tourist Visa</h2>
                </div>
                <div class="service_content">
                    <p>
                        Every year, countless individuals flock to Canada, 
                        whether to reunite with loved ones or to immerse themselves in the breathtaking beauty of its landscapes. 
                        Canadian visa categories typically grant a maximum stay of six months within the country's borders. 

                        While the Canada Visitor Visa prohibits any form of paid employment during the stay, 
                        it does allow unrestricted exploration across the nation. 
                        When it comes to Canadian visas, there are two distinct options to choose from: single entry and multiple-entry. 
                        At Centilium Immigration, we offer expedited visitor visa services at affordable rates, ensuring a hassle-free process. 
                        Our knowledgeable consultants are equipped to address any inquiries you may have. 
                        If you find yourself in need of assistance, please don't hesitate to reach out to us.

                    </p>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img src={Preparation} alt="title" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Research & Planning</h3>
                            <ul className="card-list">
                                <li>Research destination country's visa requirements</li>
                                <li>Plan itinerary and duration of stay</li>
                                <li>Explore tourist attractions and accommodations</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Application} alt="title" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Visa Application</h3>
                            <ul className="card-list">
                                <li>Complete visa application form</li>
                                <li>Gather required documents (passport, itinerary, etc.)</li>
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
                                <li>Inform family/friends about travel plans</li>
                                <li>Prepare for the trip</li>
                                <li>Arrive at destination and explore</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="service_content">
                    <p>
                        Centilium Immigration specializes in providing assistance with tourist visa 
                        applications for individuals planning to visit Canada. Our team offers 
                        expedited visitor visa services at affordable rates, ensuring a hassle-free 
                        process. With our knowledgeable consultants, we address any inquiries you 
                        may have and guide you through the application process. Whether you're 
                        reuniting with loved ones or exploring Canada's breathtaking landscapes, let 
                        Centilium Immigration help make your travel dreams a reality.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Tourist;



// Visa Information
  