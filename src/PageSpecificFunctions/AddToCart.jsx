import React, { useEffect } from 'react';
import { useAuth } from '../Context/AuthContext';

const AddToCart = () => {
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const addToCart = () => {
      
      if(isLoggedIn != true){
        window.location.href = '/register';
        return;
      }

      var productID = JSON.parse(sessionStorage.getItem('currentViewItem'))['id'];
      fetch(`https://35.212.170.89/api/product/read_single.php?id=${productID}`)
        .then(response => response.json())
        .then(data => {
          let cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
          if (!cartItems.some(item => item.id === data.id)) {
            cartItems.push(data);
            sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
            const addedToCartModal = new bootstrap.Modal('#addedToCartModal',{});
            addedToCartModal.toggle();
          }
        })
        .catch(error => console.error('Error fetching data:', error));
    };

    const button = document.getElementById('addToCartBtn');
    if(button) button.addEventListener('click', addToCart);

    return () => {
      if(button) button.removeEventListener('click', addToCart);
    };
  }, [isLoggedIn]);

  return null;
};

export default AddToCart;
