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
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image">
            {product.images.img1 ? (
              <img src={`http://35.212.170.89/images/${product.images.img1}`} alt={product.name} />
            ) : (
              <img src="/alt-image.jpg" alt="No Image Available" />
            )}
          </div>
          <div className="product-details">
            <h5>{product.name}</h5>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
