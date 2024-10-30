import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { loadStripe } from '@stripe/stripe-js';

const Navbar = () => {
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    // Load Stripe.js asynchronously
    const loadStripeJS = async () => {
      const stripeObject = await loadStripe('pk_test_51OXiwpSBXSrOXlv5DNNk7oUb5WYJLzApwoj8GSNISvbzpv98CFNpeBKKNuORJcsYbkYHkotJ2OSycxwjntrq3rrH00Jx0KxLCN');
      setStripe(stripeObject);
    };

    loadStripeJS();
  }, []);

  const handlePayment = async () => {
    // Example client-side code
const items = [
  { "id": "item1", "quantity": 2, "price": 500 }, // Item 1 costs $5.00 and quantity is 2
  { "id": "item2", "quantity": 1, "price": 300 }, // Item 2 costs $3.00 and quantity is 1
];
    if (stripe) {
      // Call your server to create a PaymentIntent
      console.log("items = ",items);
      const response = await fetch('https://centilium-backend-production.onrender.com/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items }),
      });

      const { clientSecret } = await response.json();

      // Use Stripe.js to confirm the payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: {
            // Include card details here
          number: '4242424242424242',
          exp_month: 12,
          exp_year: 2024,
          cvc: '123',
          },
        },
      });

      if (result.error) {
        console.error(result.error.message);
        // Handle payment failure
      } else {
        console.log('Payment successful:', result.paymentIntent);
        // Handle payment success
      }
    }
  };

  return (
    <div>
      <h1>Hello</h1>
      {/* Your payment form UI and button */}
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Navbar;
