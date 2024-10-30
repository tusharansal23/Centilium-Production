import React, { useState } from 'react';
import '../css/templatemo.css';
import '../css/style.css';
import '../css/responsive.css';
import '../css/owl.css';
import '../css/bootstrap.css';
import '../css/logo.css';
import logo from '../images/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = ({ showButton }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="header_section">
      <div className="header_top">
        <div className="container-fluid">
          <div className="contact_link-container">
            <a href="" className="contact_link1">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>Brampton ON</span>
            </a>
            <a href="" className="contact_link2">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>Call Us: 519-841-0043</span>
            </a>
            <a href="" className="contact_link3">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <span>team@centiliumimmigration.com</span>
            </a>
          </div>
        </div>
      </div>
      <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="index.html">
              <img src={logo} className='logo' alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""></span>
            </button>

            <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <button className={`${isHomePage ? 'homepage-link' : 'nav-link'}`} onClick={() => navigate('/')} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                    Home
                  </button>
                </li>
                <li className="nav-item dropdown"
                    onMouseEnter={() => handleMouseEnter('service')}
                    onMouseLeave={handleMouseLeave}>
                  <button className={`${isHomePage ? 'homepage-link dropdown-toggle' : 'nav-link dropdown-toggle'}`}
                    aria-haspopup="true" aria-expanded={activeDropdown === 'service'} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                    Service
                  </button>
                  <div className={`dropdown-menu ${activeDropdown === 'service' ? 'show' : ''}`}>
                    <div className="dropdown-submenu">
                      <button className="dropdown-item dropdown-toggle" type="button">Business Visa</button>
                      <div className="dropdown-menu">
                        <button className="dropdown-item" type="button">Startup Visa</button>
                      </div>
                    </div>
                    <div className="dropdown-submenu">
                      <button className="dropdown-item dropdown-toggle" type="button">Work Visa</button>
                      <div className="dropdown-menu">
                        <button className="dropdown-item" type="button">LMIA</button>
                        <button className="dropdown-item" type="button">TR Extension</button>
                      </div>
                    </div>
                    <div className="dropdown-submenu">
                      <button className="dropdown-item dropdown-toggle" type="button">Tourist Visa</button>
                      <div className="dropdown-menu">
                        <button className="dropdown-item" type="button">Visitor Visa</button>
                        <button className="dropdown-item" type="button">Extension</button>
                      </div>
                    </div>
                    <div className="dropdown-submenu">
                      <button className="dropdown-item dropdown-toggle" type="button">Student Visa</button>
                      <div className="dropdown-menu">
                        <button className="dropdown-item" type="button">Study Permits</button>
                        <button className="dropdown-item" type="button">Extension</button>
                      </div>
                    </div>
                  </div>
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
