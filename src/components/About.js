import React, { useState, useEffect } from 'react';
import item5 from '../images/about2.jpg';
import '../css/About.css';

const About = () => {

    
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="mb-4 about-animation">Discover <span>C</span><span>E</span><span>N</span><span>T</span><span>I</span><span>L</span><span>I</span><span>U</span><span>M</span></h1>
                        
                        <h5>Empowering Your Journey to Canada</h5>
                        <p className="mb-4 about-text" >
                            At Centilium Immigration, our mission is to simplify the Canadian
                            immigration process and help individuals and families achieve their
                            dreams of living, working, and studying in Canada. With a team of
                            experienced immigration consultants and a deep understanding of
                            Canadian immigration law, we are committed to providing
                            personalized, reliable, and effective solutions tailored to your unique
                            needs.


                        </p>

                        <h5>Our Story</h5>
                        <p className="mb-4 about-text" >
                            Founded on the principles of integrity, professionalism, and
                            client-centric service, Centilium Immigration has been dedicated to
                            guiding clients through the complexities of Canadian immigration
                            since 2022. Our team of certified immigration
                            consultants brings a wealth of knowledge and experience, ensuring
                            that you receive the highest level of support throughout your
                            immigration journey.


                        </p>

                        <h2>Our Mission</h2>
                        <h6>
                            Our mission is to offer clear, efficient, and compassionate immigration
                            services that empower our clients to achieve their goals and make Canada
                            their new home. We strive to:
                        </h6>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Provide Expert Guidance:</span>
                                    Offer knowledgeable and up-to-date advice on
                                    all aspects of Canadian immigration.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Ensure a Smooth Process:</span>                            
                                    Manage the complexities of the immigration
                                    process to minimize stress and maximize success.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Deliver Personalized Solutions:</span>
                                    Tailor our services to meet your specific needs and circumstances.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Support Your Success:</span>
                                    Guide you through every step of the immigration
                                    process, from initial consultation to final approval.
                            </span>
                        </p>

                        <h1>Our Services</h1>
                        <p>
                            Centilium Immigration offers a comprehensive range of immigration services to meet
                            various needs, including:
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Permanent Residence Applications:</span>
                                    Express Entry, Provincial Nominee Program (PNP),
                                    and more.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Work Permits:</span>                            
                                    Temporary work permits, LMIA assistance, and employer-specific permits.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Study Permits:</span>
                                    Support for international students and post-graduation work permits.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Visitor Visas:</span>
                                    Assistance with temporary resident visas for tourism, business, and family
                                    visits.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Start-Up Visa:</span>
                                    Guidance for entrepreneurs looking to establish businesses in Canada.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Family Sponsorship:</span>
                                    Helping families reunite through sponsorship programs.
                            </span>
                        </p>

                        <h1>Why Choose Us?</h1>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Expert Team:</span>
                                Our team consists of certified immigration consultants
                                with extensive experience in Canadian immigration law.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Personalized Service:</span>                            
                                We understand that every case is unique. We
                                provide tailored solutions to meet your specific needs and goals.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Transparency and Integrity:</span>
                                We are committed to providing honest,
                                clear, and transparent advice throughout the immigration process.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Client-Centered Approach:</span>
                                Your success is our priority. We are
                                dedicated to offering exceptional service and support at every stage
                                of your immigration journey.
                            </span>
                        </p>

                        <h1>Our Values</h1>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Integrity:</span>
                                We conduct our business with honesty and transparency,
                                ensuring that our clients receive accurate and ethical advice.
                            </span>    
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Commitment:</span>                            
                                We are dedicated to providing the highest level of
                                service and support to help you achieve your immigration goals.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Excellence:</span>
                                We strive for excellence in everything we do, from the
                                quality of our services to the outcomes we achieve for our clients.
                            </span>
                        </p>
                        <p className='d-flex align-items-baseline'>
                            <i className="fa fa-check text-primary me-3"></i>
                            <span>
                                <span className='about-sub me-1'>Respect:</span>
                                We treat every client with respect and understanding,
                                recognizing the unique challenges and opportunities of each
                                individual’s immigration journey.
                            </span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
