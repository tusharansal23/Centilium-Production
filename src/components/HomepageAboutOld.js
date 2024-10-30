
import { Link } from 'react-router-dom';
import item5 from '../images/about1.jpg';
import '../css/HomepageAbout.css';
import '../css/style.css';

const HomepageAbout = () => {

    return (

        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="about-img position-relative overflow-hidden p-5 pe-0">
                            <img className="img-fluid w-100" src={item5}/>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="mb-4">Why Choose Centilium Immigration</h1>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Expert Guidance:</span>
                                Our team of certified immigration consultants has 
                                extensive experience in Canadian immigration law & procedures.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Personalized Solutions:</span>                            
                                We tailor our servies to meet your unique needs & 
                                goals, ensuring a smooth & successful immigration 
                                process.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Commitment to Excellence:</span>
                                We are dedicated to provide transparent, reliable, 
                                and efficient immigration services.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Comprehensive Support:</span>
                                From initial consultation to application submission 
                                & follow up, we are here to support you throughout 
                                your immigration journey.                                                             and efficient immigration services.
                            </span>
                        </p>
                        <Link className="btn btn-primary py-3 px-5 mt-3" to="./About">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default HomepageAbout;