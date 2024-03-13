import React, { useState, useEffect } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import schedule from 'node-schedule';
import Header from './Header';
import MeetingConfirmation from './MeetingConfirmation';
import "../css/SetUpMeeting.css";
import StripePayment from './StripePayment';
import { Link } from 'react-router-dom';

const SetUpMeeting = ({ setShowButton }) => {


  useEffect(() => {
    setShowButton(false); // Hide the header when SetUpMeeting is rendered
    return () => setShowButton(true); // Show the header when leaving SetUpMeeting
  }, [setShowButton]);

  const [selectedDateTime, setSelectedDateTime] = useState('');
  const [email, setEmail] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [userType, setUserType] = useState('new'); // Default to new user
  const [visaType, setVisaType] = useState('tourist'); // Default to tourist visa
  const [callType, setCallType] = useState('audio');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [showMandatoryFieldsAlert, setShowMandatoryFieldsAlert] = useState(false);
  const formDataArray = [selectedDateTime, email, userType, visaType, callType, fname, lname];

  // Function to check if all fields are filled
  const allFieldsFilled = () => {
    return selectedDateTime !== '' && email !== '';
  };

  const handleDateTimeChange = (date) => {
    setSelectedDateTime(date);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFnameChange = (event) => {
    setFname(event.target.value);
  };
  const handleLnameChange = (event) => {
    setLname(event.target.value);
  };
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleVisaTypeChange = (event) => {
    setVisaType(event.target.value);
  };
  const handleCallTypeChange = (event) => {
    setCallType(event.target.value);
  };

  const handleScheduleConfirmation = () => {
    if (selectedDateTime !== '' && email !== '') {
      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      setShowConfirmation(true);
    } else {
      // Show alert if any field is empty
      setShowMandatoryFieldsAlert(true);
    }
  };

  // Regular expression pattern for email validation
  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleConfirmSchedule = () => {
    // scheduleReminder();
    // setShowConfirmation(false);
    // Redirect to Stripe payment page
      setShowConfirmation(false);
      setConfirmed(true);
  };

  const handleCancelConfirmation = () => {
    setShowConfirmation(false);
  };

  const scheduleReminder = async () => {
        try {
          const response = await fetch('http://localhost:4242/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              date: selectedDateTime,
              userType,
              visaType,
            }),
          });
    
          // Assuming /send-email returns JSON, you can use response.json()
          const data = await response.json();
          console.log("data = ", data);
    
          console.log(`Meeting has been scheduled for ${selectedDateTime}`);
        } catch (error) {
          console.error('Error scheduling email reminder:', error.message);
        }
      };
    
      const isValidDate = (current) => {
        // Disable past dates
        return current.isAfter(Datetime.moment());
      };
    
      const isValidTime = (current) => {
        // Disable past times
        const now = Datetime.moment();
        const selected = Datetime.moment(current);
        return selected.isAfter(now);
      };
  return (
    <>
      {/* <Header showButton={false}/> */}
      <div className="meeting-outer-box container d-flex justify-content-center align-items-center w-100">
        <div className="meeting-inner-box border p-4" style={{ color: 'mediumblue', backgroundColor: 'lavender' }}>
          <h1 className="text-center mb-4">Meeting Page</h1>
          <div className='d-flex justify-content-space-around'>
          <div className="mb-3">
             <label className="form-label">User Type:</label>
             <select
              className="form-select"
              value={userType}
              onChange={handleUserTypeChange}
            >
              <option value="new">New User</option>
              <option value="returning">Returning User</option>
              <option value="ongoing">Ongoing User</option>
            </select>
            
            
          </div>  
          <div className="mb-3">
            <label className="form-label">Visa Type:</label>
            <select
              className="form-select"
              value={visaType}
              onChange={handleVisaTypeChange}
            >
              <option value="tourist">Tourist Visa</option>
              <option value="business">Business Visa</option>
              <option value="student">Student Visa</option>
              <option value="work">Work Visa</option>
              <option value="other">Other Visa</option>
            </select>
            
          </div>
          </div>

          {/*First Name Field */}
          <div className="mb-3">
            <label className="form-label">First Name:</label>
            <input
              type="text"
              className="form-control"
              value={fname}
              onChange={handleFnameChange}
            />
          </div>

          {/*Last Name Field */}
          <div className="mb-3">
            <label className="form-label">Last Name:</label>
            <input
              type="text"
              className="form-control"
              value={lname}
              onChange={handleLnameChange}
            />
          </div>

          {/* Call type dropdown */}
          <div className="mb-3">
            <label className="form-label">Call Type:</label>
            <select
              className="form-select"
              value={callType}
              onChange={handleCallTypeChange}
            >
              <option value="audio">Audio</option>
              <option value="video">Video</option>
            </select>
          </div>
          {/* Date and time picker */}
          <div className="mb-3">
            <label className="form-label">Select Date and Time:</label>
            <Datetime
              inputProps={{ placeholder: 'Select Date and Time' }}
              onChange={handleDateTimeChange}
              value={selectedDateTime}
              isValidDate={isValidDate}
              isValidTime={isValidTime}
              closeOnSelect={true}
            />
          </div>
          {/* Email input */}
          <div className="mb-3">
            <label className="form-label">Enter Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          {/* Book meeting button */}
          <div className="text-center">
            <button className="btn btn-primary" onClick={handleScheduleConfirmation}>
              Book Meeting
            </button>
            {showMandatoryFieldsAlert && (
              <div className="alert alert-danger mt-3" role="alert">
                All fields are mandatory.
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Confirmation modal */}
      <MeetingConfirmation
        show={showConfirmation}
        onHide={handleCancelConfirmation}
        onConfirm={handleConfirmSchedule}
        formData={formDataArray}
      />
    </>
  );
};

export default SetUpMeeting;

