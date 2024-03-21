import { useState } from 'react';
import './Cart.css';

function Cart() {
    const maxQuantity = 10;
    const initialProducts = JSON.parse(sessionStorage.getItem('cartItems'));
  
    const [products, setProducts] = useState(initialProducts); 
  
    const [quantities, setQuantities] = useState({});
  
    const handleQuantityChange = (productId, quantity) => {
      setQuantities({ ...quantities, [productId]: quantity });
    };
  
    const handleDelete = (productId) => {
      var cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
      var nCartItems = [];
      for (let i = 0; i < cartItems.length; i++) {
        if(cartItems[i]['id'] != productId){
            nCartItems.push(cartItems[i]);
        }
      }
      sessionStorage.setItem('cartItems', JSON.stringify(nCartItems));

      setProducts(products.filter((product) => product.id !== productId));
      setQuantities((prevQuantities) => {
        const updatedQuantities = { ...prevQuantities };
        delete updatedQuantities[productId];
        return updatedQuantities;
      });
    };

    const subtotal = products.reduce((acc, product) => {
        return acc + (quantities[product.id] || 1) * product.price;
      }, 0);
      const total = subtotal; 

    const handleCheckout = () => {
        var allPQ = document.querySelectorAll('.productQuantity');
        var cartQty = [];
        for (let i = 0; i < allPQ.length; i++) {
            var pq = allPQ[i];
            var qty = pq.value;
            var productID = pq.getAttribute('productID');
            cartQty.push([productID, qty]);
        }
        sessionStorage.setItem('cartQty', JSON.stringify(cartQty));
        window.location.href = '/checkout';
    };

    if(initialProducts.length != 0){
        return (
            <div className="cartContainer">
                <h1>Cart</h1>
                <div className='cartRow'>
                    <div className="Products">
                        {products.map((product) => (
                            <div className="Product" key={product.id}>
                                <img src={`http://35.212.170.89/images/${product.images.img1}`} alt="Product" />
                                <div className="ProductDescription">
                                    <h3 className="productTitle">{product.name}</h3>
                                    <p className="productCategory">{product.category_name}</p>
                                    <p className="productPrice">{product.price}</p>
                                    <select
                                        productID={product.id}
                                        value={quantities[product.id] || 1}
                                        onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                                        className="productQuantity"
                                    >
                                        {[...Array(maxQuantity).keys()].map((num) => (
                                            <option key={num + 1} value={num + 1}>{num + 1}</option>
                                        ))}
                                    </select>
                                </div>
                                <button className="DeleteButton" onClick={() => handleDelete(product.id)}>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="cartInfo">
                    <div className="cartTotal">
                        <div className="cartSubTotal">
                            <h2>Subtotal</h2>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="cartFinalAmount">
                            <h2>Total</h2>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary" style={{ float: 'right' }} onClick={handleCheckout}> Checkout </button>
            </div>
        );
    }
    else{
        return (
            <div className="cartContainer">
                <h1>Cart Is Empty</h1>
            </div>
        );
    }
}

export default Cart;