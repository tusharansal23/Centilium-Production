// MeetingPage.js
import React, { useState } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import axios from 'axios';
import schedule from 'node-schedule';
import ControlledCarousel from './HomepageCarousel';

const SetUpMeeting = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [email, setEmail] = useState('');

  const handleDateTimeChange = (date) => {
    setSelectedDateTime(date.toDate());
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const scheduleReminder = async () => {
    try {
      const job = schedule.scheduleJob(selectedDateTime, async () => {
        // Send reminder email using fetch
        const response = await fetch('http://localhost:4242/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, date: selectedDateTime }),
        });

        // Assuming /send-email returns JSON, you can use response.json()
        const data = await response.json();
        console.log("data = ", data);
      });

      console.log(`Email reminder scheduled for ${selectedDateTime}`);
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
    <ControlledCarousel />
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="border p-4" style={{ color: 'mediumblue' ,backgroundColor:'lavender'}}>
        <h1 className="text-center mb-4">Meeting Page</h1>
        <div className="mb-3">
          <label className="form-label">Select Date and Time:</label>
          
          <Datetime
            
            inputProps={{ placeholder: 'Select Date and Time' }}
            onChange={handleDateTimeChange}
            value={selectedDateTime}
            isValidDate={isValidDate}
            isValidTime={isValidTime} // Use input prop directly
            
          />
          
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={scheduleReminder}>
            Book Meeting
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default SetUpMeeting;
