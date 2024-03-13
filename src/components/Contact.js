import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";
import "../css/Contact.css";
function Contact(){
    return (

        //  contact section 
            <section >

                <div className="container mt-20">
                    <div className="contact-info">
                        <span className="contact_details">Contact Information</span>
                            <p>For any queries or assistance, feel free to reach out to us:</p>
                            <ul>
                                <li>Phone: +1-123-456-7890</li>
                                <li>Email: info@centiliumimmigration.com</li>
                            </ul>
                    </div>
                    <div className="summary">
                        <span className="contact_details">24/7 Availability</span>
                        <p>We are available 24 hours a day, 7 days a week to assist you with your immigration inquiries. Our dedicated team strives to reply to your queries within 24 hours, ensuring prompt and reliable assistance.</p>
                    </div>
                </div>

                <div className="container contact_section layout_padding">
                    <div className="contact_bg_box">
                        <img src="images/contact-bg.jpg" alt=""/>
                    </div>
                    <div className="container">
                        <div className="heading_container heading_center">
                            <h2>
                                Contact Us
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-md-9 mx-auto">
                                <div className="form_container">
                                    <form>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <input type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <input type="text" className="form-control" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="form-group ">
                                            <input type="text" className="message-box" placeholder="Message" />
                                        </div>
                                        <div className="btn-box">
                                            <a href="mailto:team@centiliumimmigration.com, meghnaansal94@gmail.com">Submit</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }

    export default Contact;