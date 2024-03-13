import logo from "../images/logo.png";
import { Link } from 'react-router-dom';
import Student from "./Student";
import Business from "./Business";
import Tourist from "./Tourist";
import Work from "./Work";
import "../css/HomepageInfo.css";

function HomepageInfo(){

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
                                        301, Robert Parkinson drive, Brampton ON L7A4W9
                                    </span>
                                </a>
                                <a href="" className="">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                                        Call Us: +1 647-324-8308
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
                                <form action="#">
                                    <input type="email" placeholder="Enter your email"/>
                                    <button>
                                        Subscribe
                                    </button>
                                </form>
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