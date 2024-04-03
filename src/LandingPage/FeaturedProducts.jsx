import { useState } from 'react'

function Header() {

  return (
    <>
        <div className="container-fluid featuredProducts">
            <div className="textCenter">
                <h1>Featured Products</h1>
            </div>
            <div className="productsGrid" id="featuredProductsGrid">
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src="https://watch.chowtaifook.com/images/rolex/2023sep/watches/front_facing/m126234-0057_modelpage_front_facing_landscape.png" className="card-img-top" alt="Rolex Oyster Perpetual DateJust">
                        </img>
                        <div className="card-body">
                            <h2 className="card-title">Rolex 1</h2>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Product</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src="https://www.watchpalace.com.sg/wp-content/uploads/watch-assets-front-facing/landscape_assets/m228238-0061_modelpage_front_facing_landscape.png" className="card-img-top" alt="Rolex Oyster Perpetual Day-Date">
                        </img>
                        <div className="card-body">
                            <h2 className="card-title">Rolex 2</h2>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Product</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src="https://www.cortinawatch.com/wp-content/themes/Cortina-revamp/rolex-bespoke-2020/images/model/watch_assets_front_facing/dekstop/m126500ln-0002_modelpage_front_facing_landscape.png" className="card-img-top" alt="Rolex Oyster Perpetual Superlative Chronometer Officially Certified Cosmograph">
                        </img>
                        <div className="card-body">
                            <h2 className="card-title">Rolex 3</h2>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Product</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src="https://www.thehourglass.com/wp-content/uploads/sites/15/2023/05/m126710blro-0001_modelpage_front_facing_landscape_4-14-2023.png" className="card-img-top" alt="Rolex Perpetual GMT-Master II">
                        </img>
                        <div className="card-body">
                            <h2 className="card-title">Rolex 4</h2>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Product</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src="https://www.thehourglass.com/wp-content/uploads/sites/15/2023/05/m126610lv-0002_modelpage_front_facing_landscape_4-14-2023.png" className="card-img-top" alt="Rolex Perpetual Submariner">
                        </img>
                        <div className="card-body">
                            <h2 className="card-title">Rolex 5</h2>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Product</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" style={{width: '18rem'}}>
                        <img src="https://johnsonsjewellers.co.uk/media/catalog/product/cache/cbd73977aee009ed4e34488c25679644/m/1/m126719blro-0002_modelpage_front_facing_landscape_1.webp" className="card-img-top" alt="Rolex Perpetual GMT-Master II Superlative Chronometer Officially Certified">
                        </img>
                        <div className="card-body">
                            <h2 className="card-title">Rolex 6</h2>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Product</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header
