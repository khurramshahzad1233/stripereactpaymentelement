import React from 'react'
import {createContext,useContext,useState} from "react"

const Stripecontext=createContext()

const Stripeprovider = ({children}) => {
  const [chargeid,setChargeid]=useState(null)
  const [paymentid,setPaymentid]=useState("");
  const [amount,setAmount]=useState(null)

  return (
    <Stripecontext.Provider value={{chargeid,setChargeid,amount,setAmount,paymentid,setPaymentid}}>
        {children}
    </Stripecontext.Provider>
  )
};

export const Stripestate=()=>{
    return useContext(Stripecontext)
}

export default Stripeprovider