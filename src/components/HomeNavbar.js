import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css'; // Import CSS file for animations

const HomeNavbar = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [showDropdown, setShowDropdown] = useState(false);
    const [visibleItems, setVisibleItems] = useState([]);
    const [subDropdownVisible, setSubDropdownVisible] = useState({});

    const items = ['Permanent Residency', 'Work And Travel Permit', 'Study Permit', 'Visitor Visa', 'StartUp Visa', 'Family Sponsorship'];

    const subItems = {
        'Permanent Residency': ['Express Entry', 'PNP'],
        'Study Permits': ['Student Visa', 'Post-Graduate Work Permit'],
    };

    const location = useLocation();
    const isDashboardDummyPage = location.pathname;

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
        if (linkName === 'Service') {
            setShowDropdown(!showDropdown);
        } else {
            setShowDropdown(false);
            setVisibleItems([]); // Reset visible items when another link is clicked
        }
    };

    // Sequential appearance of dropdown items
    useEffect(() => {
        if (showDropdown) {
            let i = 0;
            const newVisibleItems = [];
            const interval = setInterval(() => {
                if (i < items.length) {
                    newVisibleItems.push(items[i]);
                    setVisibleItems([...newVisibleItems]); // Make a copy of the array and update
                    i++;
                } else {
                    clearInterval(interval); // Stop when all items are shown
                }
            }, 500); // 0.5-second gap between items
            return () => clearInterval(interval); // Clean up on dismount
        } else {
            setVisibleItems([]); // Reset when dropdown is hidden
        }
    }, [showDropdown]);

    const handleSubDropdown = (itemName, visible) => {
        setSubDropdownVisible((prev) => ({
            ...prev,
            [itemName]: visible,
        }));
    };

    if (
        isDashboardDummyPage === '/DashboardDummy' ||
        isDashboardDummyPage === '/DashboardChapter' ||
        isDashboardDummyPage === '/DashboardEvent' ||
        isDashboardDummyPage === '/DashboardGallery' ||
        isDashboardDummyPage === '/ChangePassword' ||
        isDashboardDummyPage === '/AccountSetting'
    ) {
        return null;
    }

    return (
        <div className="container-fluid nav-bar bg-transparent">
            <nav className="navbar navbar-expand-lg navbar-light py-0 px-4 navbar-bg-transparent">
                <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
                    <div className="icon logo-box p-2 me-2">
                        <img className="img-fluid navbar-img-container" src={logo} alt="Icon" />
                    </div>
                    <h2 className="m-0 text-primary">Centilium</h2>
                    <h6 className='mtinpx-15'>Immigration</h6>
                </a>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <Link to="./" className={`nav-item nav-link ${activeLink === 'Home' ? 'active' : ''}`} onClick={() => handleLinkClick('Home')}>
                            Home
                        </Link>
                        <Link to="./About" className={`nav-item nav-link ${activeLink === 'About' ? 'active' : ''}`} onClick={() => handleLinkClick('About')}>
                            About
                        </Link>
                        <div
                            className="nav-item dropdown"
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <Link to="#" className={`nav-item nav-link dropdown-toggle ${activeLink === 'Service' ? 'active' : ''}`} onClick={() => handleLinkClick('Service')}>
                                Service
                            </Link>
                            {showDropdown && (
                                <div className="dropdown-menu show">
                                    {visibleItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`dropdown-box ${index % 2 === 0 ? 'animate-left' : 'animate-right'}`}
                                            onMouseEnter={() => handleSubDropdown(item, true)}
                                            onMouseLeave={() => handleSubDropdown(item, false)}
                                        >
                                            {item && ( // Only render the link if the item is defined
                                                <Link to={`./${item.replace(/\s+/g, '')}`} className={`dropdown-item ${index % 2 === 0 ? 'nav-item-left' : 'nav-item-right'}`}>
                                                    {item}
                                                </Link>
                                            )}

                                            {/* Submenu for items like 'Permanent Residency' and 'Study Permits' */}
                                            {subItems[item] && subDropdownVisible[item] && (
                                                <div className="dropdown-menu submenu show">
                                                    {subItems[item].map((subItem, subIndex) => (
                                                        <div key={subIndex} className={`dropdown-box ${subIndex % 2 === 0 ? 'animate-left' : 'animate-right'}`}>
                                                            {subItem && (
                                                            <Link to={`./${subItem.replace(' ', '')}`} className={`dropdown-item ${subIndex % 2 === 0 ? 'nav-item-left' : 'nav-item-right'}`}>
                                                                {subItem}
                                                            </Link>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <Link to="./Contact" className={`nav-item nav-link ${activeLink === 'Contact' ? 'active' : ''}`} onClick={() => handleLinkClick('Contact')}>
                            Contact Us
                        </Link>
                    </div>
                    <Link to="./SetUpMeeting" className="btn btn-primary px-3 d-none d-lg-flex">
                        BOOK MEET
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default HomeNavbar;
