// AdminPage.jsx
import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import UpdateProductForm from './UpdateProductForm';
import DeleteProductForm from './DeleteProductForm';
import './AdminPage.css'; 

import { AuthProvider, useAuth } from '../Context/AuthContext';

const AdminPage = () => {
  const { isLoggedIn, isAdmin } = useAuth();

  console.log(isLoggedIn, isAdmin);

  if(isLoggedIn == true){
    if(isAdmin == true){
      const [selectedOption, setSelectedOption] = useState('productList'); // Default selected option
    
    const handleOptionClick = (option) => {
      setSelectedOption(option);
    };
  
    return (
      <div className="admin-container">
        <div className="sidebar">
          <ul className="sidebar-menu">
            <li className={selectedOption === 'productList' ? 'active' : ''} onClick={() => handleOptionClick('productList')}>View Product List</li>
            <li className={selectedOption === 'createProduct' ? 'active' : ''} onClick={() => handleOptionClick('createProduct')}>Create Product</li>
            <li className={selectedOption === 'updateProduct' ? 'active' : ''} onClick={() => handleOptionClick('updateProduct')}>Update Product</li>
            <li className={selectedOption === 'deleteProduct' ? 'active' : ''} onClick={() => handleOptionClick('deleteProduct')}>Delete Product</li>
          </ul>
        </div>
        <div className="content">
          {selectedOption === 'productList' && (
            <div className="product-list">
              <h1>Product List</h1>
              <ProductList />
            </div>
          )}
          {selectedOption === 'createProduct' && (
            <div className="product-form">
              <h1>Create Product</h1>
              <ProductForm />
            </div>
          )}
          {selectedOption === 'updateProduct' && (
            <div className="update-product-form">
              <h1>Update Product</h1>
              <UpdateProductForm />
            </div>
          )}
          {selectedOption === 'deleteProduct' && (
            <div className="delete-product-form">
              <h1>Delete Product</h1>
              <DeleteProductForm />
            </div>
          )}
        </div>
      </div>
    );
    }
    else{
      return (
        <>
          <h2>User Unauthorized</h2>
        </>
      );
    }
  }
  else{
    return (
      <>
        <h2>User Unauthorized</h2>
      </>
    );
  }
  
  


};

export default AdminPage;
