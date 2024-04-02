import { useState } from 'react';

function Jumbotron() {
  return (
    <main>
      <section className="promotionBanner">
        <div className="row">
          <div className="promotionalItem">
            <div className="col">
              <article className="textBlock">
                <h3>Rolex Submariner</h3>
                <p>Bootiful watch created by the god Midas himself, when he touched a block of wood.</p>
              </article>
              <button className="btn btn-primary">Buy It Now</button>
            </div>
            <div className="col alignCenter">
              <img src="https://www.thehourglass.com/wp-content/uploads/sites/15/2023/05/m126619lb-0003_modelpage_front_facing_landscape_4-14-2023.png" alt="Rolex Perpetual Date Submariner Superlative Chronometer Officially Certified" />
            </div>
          </div>
        </div>
      </section>
      {/* Other components and page content go here */}
    </main>
  );
}

export default Jumbotron;
