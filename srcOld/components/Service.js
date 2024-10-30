import React, { useState } from 'react';
import "../css/Service.css";
import Student from './Student';
import Tourist from './Tourist';
import Work from './Work';
import Business from './Business';
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";

function Service(){
  const [selectedVisa, setSelectedVisa] = useState('workVisa');

  const handleVisaSelect = (visaType) => {
    setSelectedVisa(visaType);
  };

  return (
    <section className="service_section layout_padding pt-12">
      <div className="service_container">
        <div className="sidebar">
          <ul className="menu">
            <li className={`menu-item ${selectedVisa === 'workVisa' ? 'active' : ''}`} onClick={() => handleVisaSelect('workVisa')}>Work Visa</li>
            <li className={`menu-item ${selectedVisa === 'touristVisa' ? 'active' : ''}`} onClick={() => handleVisaSelect('touristVisa')}>Tourist Visa</li>
            <li className={`menu-item ${selectedVisa === 'businessVisa' ? 'active' : ''}`} onClick={() => handleVisaSelect('businessVisa')}>Business Visa</li>
            <li className={`menu-item ${selectedVisa === 'studentVisa' ? 'active' : ''}`} onClick={() => handleVisaSelect('studentVisa')}>Student Visa</li>
          </ul>
        </div>
        <div className="main-content">
          {selectedVisa === 'studentVisa' && <Student />}
          {selectedVisa === 'touristVisa' && <Tourist />}
          {selectedVisa === 'workVisa' && <Work />}
          {selectedVisa === 'businessVisa' && <Business />}
          {/* {selectedVisa && selectedVisa !== 'studentVisa' && (
            <div className="visa-component">
              <h2>{selectedVisa} Information</h2>
              <p>This is the content for {selectedVisa.toLowerCase()}.</p>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
}

export default Service;
