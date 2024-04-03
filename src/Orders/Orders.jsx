import React, { useState, useEffect } from 'react';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userEmail = localStorage.getItem('userEmail');
        const response = await fetch('https://35.212.170.89/api/order/read.php?user='+userEmail);
        const data = await response.json();

        if(data.message != "No Orders Found"){
          setOrders(data.data);
        }
        
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Past Orders</h1>
      {orders.length > 0 ? orders.map((order) => (
        <div key={order.id} className="mb-5">
          <h2>Order ID: {order.id}</h2>
          <p>Status: {order.status}</p>
          <p>Order Time: {new Date(order.timestamp).toLocaleString()}</p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {order.orderObj.map((item) => (
                <tr key={item.id}>
                  <td>
                    {item.name}
                    <div>
                      <img src={`http://35.212.170.89/images/${item.images.img1}`} alt={item.name} style={{ width: '100px' }}/>
                    </div>
                  </td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${(parseFloat(item.price) * item.quantity).toFixed(2)}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )) : (
        <p>No orders found.</p>
      )}
    </div>
  );
}

export default Orders;
