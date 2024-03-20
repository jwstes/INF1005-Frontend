import React, { useEffect } from 'react';

const AddToCart = () => {
  useEffect(() => {

    document.getElementById('addToCartBtn').addEventListener('click', function(){

        var productID = JSON.parse(sessionStorage.getItem('currentViewItem'))['id'];
        fetch(`http://35.212.170.89:5000/api/product/read_single.php?id=${productID}`)
        .then(response => response.json())
        .then(
            data => {
                console.log(data);
            }
        )
        .catch(error => console.error('Error fetching data:', error));
    });

    
        



  }, []);

  return null;
};

export default AddToCart;
