import React from 'react';
import '../css/templatemo.css';
import '../css/style.css';
import '../css/responsive.css';
import '../css/owl.css';
import '../css/bootstrap.css';
import '../css/logo.css';
import logo from '../images/logo.png';
//import About from './About';
import { useNavigate, useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';
// Use CSS styles with media queries

const Header = ({showButton}) => {

  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  console.log("ishomepage = ",isHomePage);
  return (
    <header className="header_section">
      <div className="header_top">
        <div className="container-fluid">
          <div className="contact_link-container">
            <a href="" className="contact_link1">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                301, Robert Parkinson drive, Brampton ON L7A4W9
              </span>
            </a>
            <a href="" className="contact_link2">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call Us: +1 647-324-8308
              </span>
            </a>
            <a href="" className="contact_link3">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>
                team@centiliumimmigration.com
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="index.html">
              <img src= {logo} className='logo' alt="Logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""></span>
            </button>

            <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <button className={`${isHomePage ? 'homepage-link' : 'nav-link'}`} onClick={() => navigate('/')} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                      Home
                  </button>
                </li>
                <li className="nav-item">
                <button className={`${isHomePage ? 'homepage-link' : 'nav-link'}`} onClick={() => navigate('/Service')} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                    Service
                  </button>
                </li>
                <li className="nav-item">
                <button className={`${isHomePage ? 'homepage-link' : 'nav-link'}`} onClick={() => navigate('/About')} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                    About
                  </button>
                </li>  
                <li className="nav-item">
                <button className={`${isHomePage ? 'homepage-link' : 'nav-link'}`} onClick={() => navigate('/Contact')} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                    Contact Us
                  </button>
                </li>
                {/* <li class="nav-item">
                  <Link class="nav-link" to="./SetUpMeeting"> Book Meeting </Link>
                </li> */}
              </ul>
            </div>
            {showButton && (
                <div className="navigation-btn-box">
                    <Link to="./SetUpMeeting" className="btn-2"> 
                        Book Meeting 
                    </Link>
                </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
