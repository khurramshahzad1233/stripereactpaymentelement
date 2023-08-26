import React from 'react'
import {Routes,Route,BrowserRouter as Router} from "react-router-dom"
import Home from './pages/Home'
import Success from "./pages/Success"
import Payment from './pages/Payment'
import CheckoutForm from './pages/CheckoutForm'



const App = () => {
  return (
    <Router>

      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/paymentform' element={<CheckoutForm/>}/>
      </Routes>
    </Router>
  )
}

export default App