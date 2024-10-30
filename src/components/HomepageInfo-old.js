import { useState } from "react";
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';
import Student from "./Student";
import Business from "./Business";
import Tourist from "./Tourist";
import Work from "./Work";
import "../css/HomepageInfo.css";

function HomepageInfo(){

    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isSubscribed, setIsSubscribed] = useState(false);
    
    const subscribeHandler = () => {
        // Regular expression to check if the email follows a valid format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailPattern.test(email)) {
            setIsValidEmail(false);
        } else {
            setIsValidEmail(true);
            setIsSubscribed(true);
            // Logic to subscribe if email is valid
        }
    };
    
    return (
        <section className="info_section ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="info_logo">
                                <a className="navbar-brand" href="index.html">
                                    <img src={logo} width="180" height="180"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 pl-4">
                            <div className="info_links">
                                <h5>
                                    Useful Link
                                </h5>
                                <ul>
                                    <li>
                                        <Link to="./Student" className="link">
                                            <p>
                                                Student Visa
                                            </p>
                                            
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="./Business">
                                            <p>
                                                Business Visa
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="./Tourist">
                                            <p>
                                                Tourist Visa
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="./Work">
                                            <p>
                                                Work Visa
                                            </p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="info_info">
                                <h5>
                                    Contact Us
                                </h5>
                            </div>
                            <div className="info_contact">
                                <a href="" className="">
                                    <i className="fa fa-map-marker" aria-hidden="true">    
                                    </i>
                                    <span>
                                        Brampton ON
                                    </span>
                                </a>
                                <a href="" className="">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                                        Call Us: 519-841-0043
                                    </span>
                                </a>
                                <a href="" className="">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span>
                                        team@centiliumimmigration.com
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="info_form ">
                                <h5>
                                    Newsletter
                                </h5>
                                <p>Subscribe to our newsletter to get the latest news and updates!</p>
                                    {!isSubscribed ? (
                                        <div className="position-relative mx-auto footer-container" >
                                        <input
                                            className="form-control bg-transparent w-100 py-3 ps-4 pe-5 c-red"
                                            type="text"
                                            placeholder="Your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {!isValidEmail && <p className="text-danger">Please enter a valid email address.</p>}
                                        <button
                                            type="button"
                                            className="btn btn-primary position-absolute end-0 mt-2 w-100"
                                            onClick={subscribeHandler}
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                    ) : (
                                        <button
                                            type="button"
                                            className="btn btn-primary end-0 mt-2 w-100"
                                            disabled
                                        >
                                                Subscribed
                                        </button>
                                        )}    
                                {/* <form action="#">
                                    <input type="email" placeholder="Enter your email"/>
                                    <button>
                                        Subscribe
                                    </button>
                                </form> */}
                                <div className="social_box">
                                    <a href="">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.youtube.com/@CentiliumImmigration">
                                        <i className="fa fa-youtube" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.instagram.com/centiliumimmigration">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    );
}
export default HomepageInfo;