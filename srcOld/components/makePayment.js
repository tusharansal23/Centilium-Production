import { loadStripe } from "@stripe/stripe-js"; 
const makePayment = async (product) => { 
  console.log("products = ",product);
    const stripe = await loadStripe("pk_test_51OXiwpSBXSrOXlv5DNNk7oUb5WYJLzApwoj8GSNISvbzpv98CFNpeBKKNuORJcsYbkYHkotJ2OSycxwjntrq3rrH00Jx0KxLCN"); 
    //const body = {items: { product }}; 

    const productArray = Object.values(product);
    const [price, duration, quantity, callType, selectedDateTime, email, userType, visaType] = productArray;
console.log(productArray);

    const body = {
      
        "items": 
        [
          {
            "CallType": callType,
            "UserType": userType,
            "MeetingDate": selectedDateTime,
            "Quantity":quantity,
            "Duration":duration,
            "Price": price
          }
        ]

    }
    const headers = { 
      "Content-Type": "application/json", 
    }; 
 
    const response = await fetch( 
      "https://centilium-backend-production.onrender.com/create-checkout-session", 
      { 
        method: "POST", 
        headers: headers, 
        body: JSON.stringify(body), 
      } 
    ); 
 
    const session = await response.json(); 
 
    const result = stripe.redirectToCheckout({ 
      sessionId: session.id, 
    }); 
 
    if (result.error) { 
      console.log(result.error); 
    } 
  }; 
  export default makePayment;