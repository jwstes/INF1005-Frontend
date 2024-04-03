import { useState, useEffect } from 'react';

function Payment() {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: ''
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedCartItems = sessionStorage.getItem('cartItems');
    const savedCartQuantities = sessionStorage.getItem('cartQty');
    const cartItems = savedCartItems ? JSON.parse(savedCartItems) : [];
    const cartQuantities = savedCartQuantities ? JSON.parse(savedCartQuantities) : [];

    const quantitiesObj = cartQuantities.reduce((acc, [productId, quantity]) => {
      acc[productId] = Number(quantity);
      return acc;
    }, {});

    const calculatedTotal = cartItems.reduce((total, item) => {
      const quantity = quantitiesObj[item.id] || 1;
      return total + (item.price * quantity);
    }, 0);

    setTotalPrice(calculatedTotal);
  }, []);


  const validateCardNumber = (number) => {
    const regex = new RegExp("^[0-9]{16}$");
    return regex.test(number);
  };
  const validateExpiryDate = (date) => {
    const regex = new RegExp("^(0[1-9]|1[0-2])\/?([0-9]{2})$");
    return regex.test(date);
  };
  const validateCVV = (cvv) => {
    const regex = new RegExp("^[0-9]{3,4}$");
    return regex.test(cvv);
  };
  const validateForm = () => {
    const newErrors = {};
    if (!validateCardNumber(cardDetails.cardNumber)) {
      newErrors.cardNumber = 'Invalid card number. Must be 16 digits.';
    }
    if (!validateExpiryDate(cardDetails.expiryDate)) {
      newErrors.expiryDate = 'Invalid expiry date. Format MM/YY.';
    }
    if (!validateCVV(cardDetails.cvv)) {
      newErrors.cvv = 'Invalid CVV. Must be 3 or 4 digits.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));

    setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      console.error('Validation failed', errors);
      return;
    }

    const savedCartItems = JSON.parse(sessionStorage.getItem('cartItems'));
    const savedCartQuantities = JSON.parse(sessionStorage.getItem('cartQty'));

    for (let i = 0; i < savedCartQuantities.length; i++) {
      var qtyObj = savedCartQuantities[i];
      for (let j = 0; j < savedCartItems.length; j++) {
        if(savedCartItems[j]['id'] == qtyObj[0]){
          savedCartItems[j]['quantity'] = parseInt(qtyObj[1]);
        }
      }
    }

    var createOderResponse = await fetch('https://35.212.170.89/api/order/create.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: Date.now(),
        user_id: localStorage.getItem('userID'),
        status: "Paid",
        orderObj: JSON.stringify(savedCartItems)
      }),
    });

    const respData = await createOderResponse.json();
    if(respData['message'] == "Order Created"){
      window.location.href = '/PaymentSuccess';
    }
    else{
      window.location.href = '/PaymentError';
    }
  };

  return (
    <div className="paymentContainer">
      <h1>Payment Information</h1>
      <div className="totalAmount">
        <h4>Total Amount: ${totalPrice.toFixed(2)}</h4>
      </div>
      <form onSubmit={handleSubmit} className="paymentForm">
        <div className="formGroup">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            className="form-control"
            value={cardDetails.cardNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            className="form-control"
            value={cardDetails.expiryDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            className="form-control"
            value={cardDetails.cvv}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="cardHolderName">Cardholder Name</label>
          <input
            type="text"
            id="cardHolderName"
            name="cardHolderName"
            className="form-control"
            value={cardDetails.cardHolderName}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Checkout</button>
      </form>
      {errors.cardNumber && <div className="error">{errors.cardNumber}</div>}
      {errors.expiryDate && <div className="error">{errors.expiryDate}</div>}
      {errors.cvv && <div className="error">{errors.cvv}</div>}
    </div>
  );
}

export default Payment;
