import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    // Use Elements to get a reference to the CardElement
    const cardElement = elements.getElement(CardElement);

    // Create a PaymentMethod object using the card element
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error.message);
      setMessage(error.message);
      setIsLoading(false);
      return;
    }

    // Call your server to create a PaymentIntent
    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        payment_method: paymentMethod.id,
        // Additional data like items, etc.
      }),
    });

    const result = await response.json();

    // Handle the result from your server
    if (result.error) {
      console.error(result.error.message);
      setMessage(result.error.message);
    } else {
      console.log('Payment successful:', result.paymentIntent);
      setMessage('Payment successful!');
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      {/* Display the CardElement */}
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button disabled={isLoading || !stripe} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : 'Pay now'}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
