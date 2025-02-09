import item1 from '../images/call-to-action.jpg';
import HomepageMap from './HomepageMap';


const HomepageContact = () => {

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="bg-light rounded p-3">
                    <div className="contact-container bg-white rounded p-4" /*style="border: 1px dashed rgba(0, 185, 142, .3)"*/>
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <img className="img-fluid rounded w-100" src={item1} alt=""/>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="mb-4">
                                <h1 className="mb-3">Get Started Today</h1>
                                    <p>Reay to make Canada your new home? Contact us to schedule a consultation and discover
                                        how can we help you achieve your immigration goals.</p>
                                    </div>
                                <a href="" className="btn btn-primary py-3 px-4 me-2"><i class="fa fa-phone-alt me-2"></i>Make A Call</a>
                                <a href="" className="btn btn-dark py-3 px-4"><i class="fa fa-calendar-alt me-2"></i>Get Appoinment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomepageContact;