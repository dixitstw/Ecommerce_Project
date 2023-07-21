import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React, { useEffect, useState } from 'react'
import { getStripeKey } from '../../api/paymentAPI'
import Payment from './Payment'

const PaymentComponent = () => {
    let [stripeKey, setStripeKey] = useState('')

    useEffect(()=> {
        getStripeKey()
        .then(data=> {
            return setStripeKey(data.stripeAPIKey)
        })
    }, [])
  return (
    <>
    {
        stripeKey && 
        
        <Elements stripe = {loadStripe(stripeKey)}>
            <Payment/>
        </Elements>

    }
    </>
  )
}

export default PaymentComponent