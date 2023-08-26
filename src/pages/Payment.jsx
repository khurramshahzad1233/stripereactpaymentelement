import React from 'react';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';

const stripePromise=loadStripe("pk_test_51NXNWpKyWdxd7WwsHOB1NKt5KqOj703qjGofeiwpkAnxIShrxac3K7NTHwC1PWVxPRwBzm3jiAjr2ugohCBVDQo400L8scRgGI")

const Payment = () => {
  let clientsecret="pi_3NjLiuKyWdxd7Wws2lNVUMAV_secret_n8HjK42eANRw1vmX7WskZgKpg"

  const options={
    clientSecret:clientsecret,
  }
    
  return (
    <Elements stripe={stripePromise} options={options}>
        <CheckoutForm/>
    </Elements>
  )
}

export default Payment