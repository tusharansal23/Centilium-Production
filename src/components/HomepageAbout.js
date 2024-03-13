import about1 from '../images/about1.jpg';
import '../css/style.css';

function HomepageAbout() {
  return ( 
            <section className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 px-0">
                            <div className="img_container">
                                <div className="img-box">
                                    <img src={about1} alt="about" className="image_8"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 px-0">
                            <div className="detail-box">
                                <div className="heading_container ">
                                    <h2>
                                        Who Are We?
                                    </h2>
                                </div>
                                <p>
                                    Centilium Immigration simplifies the daunting immigration process, 
                                    offering hassle-free solutions at affordable rates. 
                                    Our experienced consultants gather your information and provide tailored options, 
                                    guiding you every step of the way. Trust us to make your dream destination a seamless and stress-free reality
                                </p>
                                <div className="btn-box">
                                    <a href="">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

  );
}
export default HomepageAbout;