import { useState, useEffect } from 'react';
import './Checkout.css';

function Checkout() {
    const [cartProducts, setCartProducts] = useState(() => {
        const savedCartItems = sessionStorage.getItem('cartItems');
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });

    const [cartQuantities, setCartQuantities] = useState(() => {
        const savedCartQuantities = sessionStorage.getItem('cartQty');
        const quantitiesObj = savedCartQuantities ? JSON.parse(savedCartQuantities).reduce((acc, [productId, quantity]) => {
            acc[productId] = quantity;
            return acc;
        }, {}) : {};
        return quantitiesObj;
    });

    const subtotal = cartProducts.reduce((acc, product) => {
        const quantity = cartQuantities[product.id] || 1;
        return acc + (parseFloat(product.price) * quantity);
    }, 0);

    const total = subtotal;


    const toPayment = () => {
        window.location.href = '/payment';
    };

    return (
        <div className="cartContainer">
            <h1>Checkout</h1>
            <div className='cartRow'>
                <div className="cartProducts">
                    {cartProducts.map((product) => (
                        <div className="cartProduct" key={product.id}>
                            <img src={`http://35.212.170.89/images/${product.images.img1}`} alt="Product" />
                            <div className="ProductDescription">
                                <h3 className="cartProductTitle">{product.name}</h3>
                                <p className="cartProductCategory">{product.category_name}</p>
                                <p className="cartProductPrice">${(parseFloat(product.price) * (cartQuantities[product.id] || 1)).toFixed(2)}</p>
                                <p className="cartProductQuantity">Quantity: {cartQuantities[product.id] || 1}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <section className="shipping-information">
            </section>
            <div className="cartInfo">
                <div className="checkoutCartTotal">
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
            <button className="btn btn-primary" onClick={toPayment} style={{ float: 'right' }}> Continue to Payment </button>
        </div>
    );
}

export default Checkout;
