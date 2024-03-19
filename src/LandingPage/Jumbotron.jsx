import { useState } from 'react'

function Jumbotron() {

  return (
    <>
        <div className="promotionBanner">
            <div className="row">
              <div className="promotionalItem">
                <div className="col">
                  <div className="textBlock">
                    <h3>Rolex Submariner</h3>
                    <p>Bootiful watch created by the god Midas himself, when he touched a block of wood.</p>
                  </div>
                  <button className="btn btn-primary">Buy It Now</button>
                </div>
                <div className="col alignCenter">
                  <img src="https://www.thehourglass.com/wp-content/uploads/sites/15/2023/05/m126619lb-0003_modelpage_front_facing_landscape_4-14-2023.png"></img>
                </div>
              </div>
              
            </div>
        </div>
    </>
  )
}

export default Jumbotron
