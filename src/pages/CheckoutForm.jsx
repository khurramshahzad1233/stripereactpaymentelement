import React,{useEffect} from 'react'
import {PaymentElement} from "@stripe/react-stripe-js"
import {useStripe,useElements} from "@stripe/react-stripe-js"
// import {useNavigate} from "react-router-dom"

const CheckoutForm = () => {
  const stripe=useStripe();
  const elements=useElements();

  // const navigate=useNavigate()

  useEffect(()=>{
    if(!stripe){return;}
  },[stripe])

  const paymenthandler=async(event)=>{
    event.preventDefault();

    if(!stripe ||!elements){return};

    const result=await stripe.confirmPayment({
      elements,
      confirmParams:{
        return_url:"http://localhost:3000/success",
      },
    })
    console.log(result)

    if(result.error.type==="card_error"){
      alert(result.error.message)
    }
    if(result.error.type==="validation_error"){
      alert(result.error.message)
    }
    
    
  }
  return (
    <form>
      <PaymentElement/>
      <button onClick={paymenthandler} disabled={!stripe ||!elements}>Submit</button>
    </form>
  )
}

export default CheckoutForm
