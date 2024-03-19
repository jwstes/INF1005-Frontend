import { useState, useEffect } from 'react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

function ViewProduct() {
    let [searchParams] = useSearchParams();
    const productId = searchParams.get('id');

    React.useEffect(() => {
        console.log(productId);
    }, [productId]);


    const [carouselItems, setCarouselItems] = useState([]);

    useEffect(() => {
        const imageUrls = [
            "https://staticg.sportskeeda.com/editor/2022/06/f53e6-16560608039433-1920.jpg?w=840",
            "https://wegotthiscovered.com/wp-content/uploads/2023/11/711751b.jpg",
            "https://akcdn.detik.net.id/visual/2022/06/30/anime-spy-x-family-anya-forger_169.jpeg?w=400&q=90"
        ];

        const items = imageUrls.map((url, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div style={{backgroundImage: `url(${url})`}} className="d-block w-100 carouselImageItem" alt={`Slide ${index}`} />
            </div>
        ));

        setCarouselItems(items);
    }, []);

  return (
    <>
        <div className='viewProductSection'>
            <div className='innerBody'>
                <div className='col'>
                      <div id="carouselExample" class="carousel slide" style={{width: '350px'}}>
                          <div class="carousel-inner" id='carouselImages'>
                            {carouselItems}
                          </div>
                          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Previous</span>
                          </button>
                          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">Next</span>
                          </button>
                      </div>
                </div>
                <div className='col-md-6'>
                    <div className='productDetails'>
                        <div>
                            <h3>Rolex 1</h3>
                            <p>SKU: 1011-3069</p>
                            <hr></hr>
                            <p>this for me is the rolex watch and so i have fuck youir mother this for me is the rolex watch and so i have fuck youir mother this for me is the rolex watch and so i have fuck youir mother </p>
                        </div>
                        <hr></hr>
                        <div>
                            <h3>JPY 300,000</h3>
                            <button className='btn btn-primary'>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ViewProduct
