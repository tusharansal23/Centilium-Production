
import Header from "./Header";
import "../css/student.css";
import Preparation from "../images/Preparation.png";
import Application from "../images/Application.png";
import Processing from "../images/Processing.png";
import Arrival from "../images/Arrival.png";

function Business(){
    return(
        <div>
            <div class="visa">
                <div class="service_heading">
                    <h2>Business Visa</h2>
                </div>
                <div class="service_content">
                    <p>
                        During the initial phases of establishing a company, 
                        the most critical aspect revolves around the development 
                        of a well-crafted business plan. 
                
                        The effectiveness of 
                        this strategy can ultimately dictate the outcome, 
                        be it success or disappointment. 
                
                        For any business-related travel to Canada, 
                        it is essential to obtain a business visitor visa. 
                        This visa allows travelers to enter Canada for commercial purposes and stay for a maximum of 183 days. 
                        However, it is crucial for business visitors to demonstrate 
                        that their livelihood does not rely on the Canadian economy. 
                        It is important to note that if you are an employee 
                        of a foreign company deployed to Canada to fulfill a contract 
                        with a domestic firm, you may not qualify as a business visitor 
                        and may need to secure a work permit. 
                        It's important to distinguish between business tourists and regular businesspeople, 
                        as Canada's appeal to the latter is further heightened by the presence of free trade agreements.

                    </p>
                </div>
                <div className="card-container">
                    <div className="card">
                        <img src={Preparation} alt="title" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Research & Preparation</h3>
                            <ul className="card-list">
                                <li>Research destination country's visa requirements for business travelers</li>
                                <li>Prepare necessary business documents (invitation letters, meeting schedules, etc.)</li>
                                <li>Plan itinerary and duration of stay</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Application} alt="title" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Visa Application</h3>
                            <ul className="card-list">
                                <li>Complete visa application form</li>
                                <li>Gather required business documents (invitation letters, business registration, etc.)</li>
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
                                <li>Prepare for business meetings</li>
                                <li>Arrive at destination and conduct business activities</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="service_content">
                    <p>
                        Centilium Immigration offers invaluable assistance in navigating the intricacies 
                        of the business visa application process. Our expertise ensures seamless 
                        procedures, facilitating entrepreneurs' access to Canada's vibrant business landscape.
                    </p>
                </div>
            
            </div>
        </div>
    );
}
export default Business;



// Visa Information
  