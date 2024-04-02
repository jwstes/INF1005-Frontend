import React, { useState, useEffect } from 'react';
import './ProductList.css'; // Import your CSS file for styling

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://35.212.170.89:5000/api/product/read.php')
      .then(response => response.json())
      .then(data => {
        const allProducts = data['data'] || [];
        setProducts(allProducts);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 col-lg-3 col-sm-6 mb-4"> {/* Adjust the column sizes as needed */}
            <div className="card">
              <div className="card-img-top">
                {product.images.img1 ? (
                  <img src={`http://35.212.170.89/images/${product.images.img1}`} alt={product.name} className="img-fluid"/>
                ) : (
                  <img src="/alt-image.jpg" alt="No Image Available" className="img-fluid"/>
                )}
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">${product.price}</p>
                <a href={`/viewProduct?id=${product.id}`} className="btn btn-primary">View Product</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
