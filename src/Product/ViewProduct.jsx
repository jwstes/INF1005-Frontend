import { useState, useEffect } from 'react';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

function ViewProduct() {
    let [searchParams] = useSearchParams();
    const productId = searchParams.get('id');

    const [
        carouselItems,
        setCarouselItems
    ] = useState([]);

    useEffect(() => {
        fetch(`http://35.212.170.89:5000/api/product/read_single.php?id=${productId}`)
        .then(response => response.json())
        .then(data => {
            const price = data['price'];
            const name = data['name'];
            const imagesObj = data['images'];
            const description = data['description'];
            const category = data['category_name'];
    
            const imageUrls = Object.values(imagesObj);
    
            const items = imageUrls.map((url, index) => (
                
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <img src={`http://35.212.170.89/images/${url}`} className="d-block w-100 carouselImageItem" alt={`Slide ${index}`} />
                </div>
            ));
    
            document.getElementById('productName').innerText = name;
            document.getElementById('productID').innerText = `SKU-${productId}`;
            document.getElementById('productDescription').innerText = description;
            document.getElementById('productPrice').innerText = `USD $${price}`;
            document.getElementById('productCategory').innerText = category;
            sessionStorage.setItem('currentViewItem', JSON.stringify(data));
            
            setCarouselItems(items);
        })
        .catch(error => console.error('Error fetching data:', error));
    }, [productId]);
    
    const redirectToProductPage = () => {
        window.location.href = '/';
    };
  return (
    <>
          <div className="modal fade" id="addedToCartModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h1 className="modal-title fs-5" id="staticBackdropLabel">Added To Cart!</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-footer">
                          <button type="button" className="btn btn-primary" onClick={redirectToProductPage}>Continue Shopping</button>
                      </div>
                  </div>
              </div>
          </div>
        <div className='viewProductSection'>
            <div className='innerBody'>
                <div className='col'>
                      <div id="carouselExample" className="carousel slide" style={{width: '350px'}}>
                          <div className="carousel-inner" id='carouselImages'>
                            {carouselItems}
                          </div>
                          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Previous</span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                              <span className="visually-hidden">Next</span>
                          </button>
                      </div>
                </div>
                <div className='col-md-6'>
                    <div className='productDetails'>
                        <div>
                            <h3 id="productName">Rolex 1</h3>
                            <p id="productID">SKU: 1011-3069</p>
                            <p>Category: <span className="badge text-bg-secondary" id="productCategory">New</span></p>
                            <hr></hr>
                            <p id="productDescription">this for me is the rolex watch and so i have fuck youir mother this for me is the rolex watch and so i have fuck youir mother this for me is the rolex watch and so i have fuck youir mother </p>
                        </div>
                        <hr></hr>
                        <div>
                            <h3 id="productPrice">300,000</h3>
                            <button className='btn btn-primary' id="addToCartBtn">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ViewProduct
