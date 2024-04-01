import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://35.212.170.89:5000/api/product/read.php')
      .then(response => response.json())
      .then(data => {
        // Directly set products without sorting by 'sold' or slicing the top 6
        const allProducts = data['data'] || [];
        setProducts(allProducts);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div id="featuredProductsGrid" className="row">
      {products.map((product) => (
        <div key={product.id} className="col">
          <div className="card" style={{ width: '18rem' }}>
            {/* Adjust the image src path according to your setup */}
            <img src={`http://35.212.170.89/images/${product.images.img1}`} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">${product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
