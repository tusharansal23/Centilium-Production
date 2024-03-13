import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MeetingConfirmation = ({ show, onHide, onConfirm, formData  }) => {
    const navigate = useNavigate();
    const {selectedDateTime, email, userType, visaType, callType, fname, lname} = formData;

    


    // Create an empty array to store formData values
const formDataArray = [];

// Iterate over the properties of formData
for (const key in formData) {
  // Construct the string with label and value
  const value = key === 'selectedDateTime' ? new Date(formData[key]).toString() : formData[key];
  const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim() + ': '; // Convert camelCase key to label
  const data = label + value;
  
  // Push the constructed string into the formDataArray
  formDataArray.push(data);
  
}
console.log(formDataArray);

  const handleConfirm = () => {
    // Call the onConfirm function if needed
    onConfirm();
    
    // Navigate to the StripePayment page
    
    navigate('/StripePayment', {state:{  formDataArray}});
    
  };
  
    return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to schedule the meeting with the following details?
        {/* Display user-entered details here */}
        <ul>
            {formData.map((data, index) => (
             <li key={index}>{index === 0 ? new Date(data).toString() : data}</li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MeetingConfirmation;
