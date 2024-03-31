// AdminPage.jsx
import React from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import './AdminPage.css'; 

const AdminPage = () => {
  return (
    <div className="admin-container">
      <div className="product-list">
        <h1>Product List</h1>
        <ProductList />
      </div>
      <div className="product-form">
        <h1>Add a New Product</h1>
        <ProductForm />
      </div>
    </div>
  );
};

export default AdminPage;
