import { useState } from 'react';
import './Cart.css';

function Cart() {
    const maxQuantity = 10;
    const initialProducts = [
      { id: 1, title: 'Product Title 1', category: 'Limited', price: '$9.99' },
      { id: 2, title: 'Product Title 2', category: 'Limited', price: '$19.99' },
    ];
  
    const [products, setProducts] = useState(initialProducts); 
  
    const [quantities, setQuantities] = useState({});
  
    const handleQuantityChange = (productId, quantity) => {
      setQuantities({ ...quantities, [productId]: quantity });
    };
  
    const handleDelete = (productId) => {
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
        history.push('/checkout');
    };

    return (
        <div className="cartContainer">
            <h1>Cart</h1>
            <div className='cartRow'>
                <div className="Products">
                    {products.map((product) => (
                        <div className="Product" key={product.id}>
                            <img src='https://watch.chowtaifook.com/images/rolex/2023sep/watches/front_facing/m126234-0057_modelpage_front_facing_landscape.png' alt="Product" />
                            <div className="ProductDescription">
                                <h3 className="productTitle">{product.title}</h3>
                                <p className="productCategory">{product.category}</p>
                                <p className="productPrice">{product.price}</p>
                                <select
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
            <span className="cartEmptyMessage" hidden="true">The cart is empty</span>  {/* Change the hidden to false when cart is empty */}
        </div>
    );
}

export default Cart;