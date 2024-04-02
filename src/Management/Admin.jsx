// AdminPage.jsx
import React from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import UpdateProductForm from './UpdateProductForm';
import DeleteProductForm from './DeleteProductForm';

import './AdminPage.css'; 

const AdminPage = () => {
  return (
    <div className="admin-container">
      <div className="product-list">
        <h1>Product List</h1>
        <ProductList />
      </div>
      <div className="forms-container">
        <div className="product-form">
          <h1>Create Product</h1>
          <ProductForm />
        </div>
        <div className="update-product-form">
          <h1>Update Product</h1>
          <UpdateProductForm />
        </div>
        <div className="delete-product-form">
          <h1>Delete Product</h1>
          <DeleteProductForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
