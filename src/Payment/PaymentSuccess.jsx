import { useState } from 'react'

function PaymentSuccess() {

    const continueShopping = () => {
        window.location.href = '/';
    };

  return (
    <>
        <div className='paymentInfoPage'>
            <h1>Payment Successful!</h1>
            <p>Your payment has been processed successfully.</p>
            <button className='btn btn-primary' onClick={continueShopping}>Continue Shopping</button>
        </div>
    </>
  )
}

export default PaymentSuccess