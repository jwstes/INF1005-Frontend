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

  if (isLoggedIn === true) {
    if (isAdmin === true) {
      const [selectedOption, setSelectedOption] = useState('productList'); // Default selected option
    
      const handleOptionClick = (option) => {
        setSelectedOption(option);
      };
  
      return (
        
        <div className="admin-container" aria-labelledby="admin-page-heading">
          <nav className="sidebar" aria-label="Admin Navigation">
            <ul className="sidebar-menu">
              <li className={selectedOption === 'productList' ? 'active' : ''} onClick={() => handleOptionClick('productList')}>View Product List</li>
              <li className={selectedOption === 'createProduct' ? 'active' : ''} onClick={() => handleOptionClick('createProduct')}>Create Product</li>
              <li className={selectedOption === 'updateProduct' ? 'active' : ''} onClick={() => handleOptionClick('updateProduct')}>Update Product</li>
              <li className={selectedOption === 'deleteProduct' ? 'active' : ''} onClick={() => handleOptionClick('deleteProduct')}>Delete Product</li>
            </ul>
          </nav>
          <section className="content" aria-live="polite">
            {selectedOption === 'productList' && (
              <div className="product-list">
                <h1 id="product-list-heading">Product List</h1>
                <ProductList />
              </div>
            )}
            {selectedOption === 'createProduct' && (
              <div className="product-form">
                <h1 id="create-product-heading">Create Product</h1>
                <ProductForm />
              </div>
            )}
            {selectedOption === 'updateProduct' && (
              <div className="update-product-form">
                <h1 id="update-product-heading">Update Product</h1>
                <UpdateProductForm />
              </div>
            )}
            {selectedOption === 'deleteProduct' && (
              <div className="delete-product-form">
                <h1 id="delete-product-heading">Delete Product</h1>
                <DeleteProductForm />
              </div>
            )}
          </section>
        </div>
      );
    } else {
      return (
        <main>
          <h2>User Unauthorized</h2>
        </main>
      );
    }
  } else {
    return (
      <main>
        <h2>User Unauthorized</h2>
      </main>
    );
  }
};

export default AdminPage;
