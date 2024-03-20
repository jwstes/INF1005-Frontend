import { useState } from 'react';
import './Checkout.css';

function Checkout() {

    return (
        <div className="cartContainer">
            <h1>Checkout</h1>
            <div className='cartRow'>
                <div className="cartProducts">
                    <div className="cartProduct">
                        <img src='https://watch.chowtaifook.com/images/rolex/2023sep/watches/front_facing/m126234-0057_modelpage_front_facing_landscape.png'></img>
                        <div className="ProductDescription">
                            <h3 className="cartProductTitle">Product Title</h3>
                            <p className="cartProductCategory">Limited</p>
                            <p className="cartProductPrice">$9.99</p>
                            <p className="cartProductQuantity">Quantity: 1</p>
                        </div>
                    </div>
                    <div className="cartProduct">
                        <img src='https://watch.chowtaifook.com/images/rolex/2023sep/watches/front_facing/m126234-0057_modelpage_front_facing_landscape.png'></img>
                        <div className="ProductDescription">
                            <h3 className="cartProductTitle">Product Title</h3>
                            <p className="cartProductCategory">Limited</p>
                            <p className="cartProductPrice">$9.99</p>
                            <p className="cartProductQuantity">Quantity: 1</p>
                        </div>
                    </div>
                    <div className="cartProduct">
                        <img src='https://watch.chowtaifook.com/images/rolex/2023sep/watches/front_facing/m126234-0057_modelpage_front_facing_landscape.png'></img>
                        <div className="ProductDescription">
                            <h3 className="productTitle">Product Title</h3>
                            <p className="productCategory">Limited</p>
                            <p className="productPrice">$9.99</p>
                            <p className="productQuantity">Quantity: 1</p>
                        </div>
                    </div>
                    <div className="cartProduct">
                        <img src='https://watch.chowtaifook.com/images/rolex/2023sep/watches/front_facing/m126234-0057_modelpage_front_facing_landscape.png'></img>
                        <div className="ProductDescription">
                            <h3 className="cartProductTitle">Product Title</h3>
                            <p className="cartProductCategory">Limited</p>
                            <p className="cartProductPrice">$9.99</p>
                            <p className="cartProductQuantity">Quantity: 1</p>
                        </div>
                    </div>
                    <div className="cartProduct">
                        <img src='https://watch.chowtaifook.com/images/rolex/2023sep/watches/front_facing/m126234-0057_modelpage_front_facing_landscape.png'></img>
                        <div className="ProductDescription">
                            <h3 className="cartProductTitle">Product Title</h3>
                            <p className="cartProductCategory">Limited</p>
                            <p className="cartProductPrice">$9.99</p>
                            <p className="cartProductQuantity">Quantity: 1</p>
                        </div>
                    </div>
                </div>
            </div>
            <section class="shipping-information">
                <h2>Shipping Information</h2>
                <div class="shipping-details">
                    <p><strong>Full Name:</strong> John Doe</p>
                    <p><strong>Address:</strong> 123 Main St</p>
                    <p><strong>City:</strong> Anytown</p>
                    <p><strong>Zip Code:</strong> 12345</p>
                    <p><strong>Country:</strong> United States</p>
                    <p><strong>Phone:</strong> +1 555-123-4567</p>
                    <p><strong>Email:</strong> johndoe@example.com</p>
                </div>
            </section>
            <div className="cartInfo">
                <div className="checkoutCartTotal">
                    <div className="cartSubTotal">
                        <h2>Subtotal</h2>
                        <span>$100.00</span>
                    </div>
                    <div className="cartFinalAmount">
                        <h2>Total</h2>
                        <span>$110.00</span>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary" style={{ float: 'right' }}> Continue to Payment </button>
        </div>
    );
}

export default Checkout;