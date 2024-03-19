import { useState } from 'react'

function ContactUsSection() {

  return (
    <>
        <div className="contactUsBanner">
            <div className="innerBody">
                <div className="col">
                    <img src="/src/images/watches.png"></img>
                </div>
                <div className="col colMid">
                    <h3>Any Questions?</h3>
                    <button className="btn btn-secondary">Contact Us</button>
                </div>
                <div className="col">
                    <img className="elevateImg" src="https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/bg/11.png"></img>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default ContactUsSection
