import { useState } from 'react'

function PaymentError() {

    const contactUs = () => {
        window.location.href = '/feedback';
    };
  return (
    <>  
        <div className='paymentInfoPage'>
            <h1>Payment Error</h1>
            <p>There was an issue with your payment. Please try again or contact us for assistance.</p>
            <button className='btn btn-primary' onClick={contactUs}>Contact Us</button>
        </div>
    </>
  )
}

export default PaymentError


