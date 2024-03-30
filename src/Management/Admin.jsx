// AdminPage.jsx
import React from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

const AdminPage = () => {
  return (
    <div>
      <h1>Product Management</h1>
      <ProductList />
      <ProductForm />
    </div>
  );
};

export default AdminPage;
