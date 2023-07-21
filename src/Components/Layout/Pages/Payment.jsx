import { CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React from 'react'
import Swal from 'sweetalert2'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { isAuthenticated } from '../../api/userAPI'
import { processPayment } from '../../api/paymentAPI'
import { placeOrder } from '../../api/orderAPI'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Payment = () => {
const {user, token} = isAuthenticated()
const stripe = useStripe()
const elements = useElements()
const navigate = useNavigate()
const dispatch = useDispatch()


  const makePayment = async (e)=> {
    e.preventDefault()
    try {
      document.getElementById('payBtn').disabled = true
      let amount = sessionStorage.getItem('total')*100

     let {client_secret} = await processPayment (amount, token) 

     let result = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
        billing_details: {
          name: user.usename,
          email: user.email
        }
      }
     })

     if(result.error) {
      Swal.fire('error', result.error.message, 'error')
      document.getElementById('payBtn').disabled=false
 }
 else {
  //place order
  let orderItems = JSON.parse(localStorage.getItem('cart_items'))
  let shipping_info = JSON.parse(localStorage.getItem('shipping_info'))
  let order = {
    ...orderItems,
    user: user._id,
    ...shipping_info
  }
  placeOrder(order)
  .then(data => {
    if (data.error){
      Swal.fire('error',data.error, 'error')
    }
    else {
        //remove items from cart
        localStorage.removeItem('cart_items')
        //remove from reducer
        dispatch({type: "EMPTY_CART"})
        document.getElementById('payBtn').disabled = false
      Swal.fire('success','Your order has been placed successfully', 'success')
      .then(()=> navigate('/home'))
  }
  })

}
    }

    catch(error){
      Swal.fire('error',error.message, 'error')
      document.getElementById('payBtn').disabled=false

    }
  }
  return (
    <>
    <Navbar/>
    <div className ='d-flex'>
    <div className = 'w-50 p-50'>
        Cart information, shipping information
    </div>
    <div className = 'w-50 p-5'>
        <label htmlFor = "card-number">Card Number</label>
        <CardNumberElement id='card-number' className = 'form-control'/>
        <label htmlFor = "card-expiry">Valid up to</label>
        <CardExpiryElement id ='card-expiry' className = 'form-control'/>
        <label htmlFor = "card-cvc">CVC</label>
        <CardCvcElement id ='card-cvc' className ="form-control"/>
        <buton classsName ='btn btn-warning w-100 mt-3' id='payBtn' onClick ={makePayment}>Make Payment</buton>
    </div>
    </div>

    <Footer/>
    </>
  )
}

export default Payment