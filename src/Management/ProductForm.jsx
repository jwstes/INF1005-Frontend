// ProductForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/products', { name, price });
      console.log('Product added successfully');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div>
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>

        <input type="text" value={name} onChange={e => setName(e.target.value)} /><br />
        <label>Price:</label>
        <input type="text" value={price} onChange={e => setPrice(e.target.value)} /><br />
        <button type="submit">Add Product</button>
      </form>
    </div>  
  );
};

export default ProductForm;
