import s1 from '../images/s1.png';
import s2 from '../images/s2.png';
import s3 from '../images/s3.png';
import s4 from '../images/s4.png';

function HomepageService() {
  return (            
                <section className="service_section layout_padding">
                    <div className="container">
                        <div className="heading_container heading_center">
                            <h2>
                                Our services
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src={s1} alt="s1"/>
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            Business Visa
                                        </h6>
                                        <p>
                                            During the initial phases of establishing a company, 
                                            the most critical aspect revolves around the development 
                                            of a well-crafted business plan. 
                
                                            {/* 
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
                                             */}
                                        </p>
                                        <a href="business.html">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src={s2} alt="s2"/>
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            Work Visa
                                        </h6>
                                        <p>
                                            Seeking to work and reside in Canada? 
                                            Look no further than Centilium Immigration, 
                                            your trusted partner for all immigration-related matters. 

                                            {/* 
                                            The Canadian government provides various options for both temporary and permanent work permits, 
                                            ensuring a range of choices for aspiring individuals. 

                
                                            Having a Canadian employer willing to sponsor your immigration journey is a significant advantage, 
                                            and our company is equipped with a team of skilled in-house recruiters to assist job seekers. 
                                            As licensed professionals in Canada, 
                                            we offer overseas clients direct and reliable support, 
                                            facilitating your migration to Canada. 
                                            Whether you specialize in manufacturing, engineering, information technology, construction, transportation, skilled trades, or healthcare, 
                                            we possess the expertise to guide you every step of the way. 
                                            Allow us the opportunity to showcase our proficiency and assist you in achieving your goals.
                                             */}
                                        </p>
                                        <a href="work.html">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src={s3} alt="s3"/>
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            Tourist Visa
                                        </h6>
                                        <p>
                                            Every year, countless individuals flock to Canada, 
                                            whether to reunite with loved ones or to immerse themselves in the breathtaking beauty of its landscapes. 
                                            Canadian visa categories typically grant a maximum stay of six months within the country's borders. 

                                            {/* 
                                            While the Canada Visitor Visa prohibits any form of paid employment during the stay, 
                                            it does allow unrestricted exploration across the nation. 
                                            When it comes to Canadian visas, there are two distinct options to choose from: single entry and multiple-entry. 
                                            At Centilium Immigration, we offer expedited visitor visa services at affordable rates, ensuring a hassle-free process. 
                                            Our knowledgeable consultants are equipped to address any inquiries you may have. 
                                            If you find yourself in need of assistance, please don't hesitate to reach out to us.
                                            */}
              
                                        </p>
                                        <a href="tourist.html">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="box ">
                                    <div className="img-box">
                                        <img src={s4} alt="s4"/>
                                    </div>
                                    <div className="detail-box">
                                        <h6>
                                            Student Visa
                                        </h6>
                                        <p>
                                            Are you aspiring to pursue education in one of the world's most intellectually advanced destinations? 
                                            Look no further than Canada, a country renowned for its welcoming and inclusive environment for international graduates. 

                                            {/* 
                                            Discover a comprehensive range of top-rated schools, colleges, and universities in Canada, 
                                            offering language programs and skill-focused courses tailored to your specific needs. 
                                            Allow us to guide you through the intricacies of applying for a student visa, study permit, 
                                            and TRV (Temporary Resident Visa) to embark on your educational journey in Canada. 
                                            Explore the fine++st academic programs available at prestigious Canadian institutions, 
                                            with over 450,000 international students obtaining study permits each year. 
                                            With 25 institutions ranking among the world's top 500, 
                                            Canada boasts exceptional academic institutions and cutting-edge research centers. 
                                            Furthermore, pursuing education in Canada may open doors to opportunities with esteemed Canadian employers. 
                                            If your ultimate goal is to become a permanent resident of Canada, 
                                            enrolling in a reputable Canadian university or college presents the best pathway to success.

                                             */}
              
                                        </p>
                                        <a href="student.html">
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

export default HomepageService;
