// src/pages/MyOrders.jsx
import React from 'react';
import styled from 'styled-components';
import { useOrders } from '../context/OrdersContext';

const OrdersContainer = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: auto;
  background-color: #f9f9f9; /* Light background for contrast */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
`;

const OrderItem = styled.div`
  border: 1px solid #ddd; /* Light border */
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px; /* Rounded corners */
  background-color: #fff; /* White background for order items */
`;

const ProductImage = styled.img`
  width: 60px; /* Adjust size as needed */
  height: auto;
  border-radius: 4px; /* Rounded corners for images */
`;

const OrderStatus = styled.p`
  font-weight: bold;
  color: ${props => (props.status === 'Delivered' ? 'green' : props.status === 'Shipped' ? 'orange' : 'red')}; /* Color based on status */
`;

const MyOrders = () => {
  const { orders } = useOrders();

  return (
    <OrdersContainer>
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <OrderItem key={index}>
            <h3>Order #{index + 1}</h3>
            <p>Order Date: {new Date(order.orderDate).toLocaleDateString()}</p> {/* Format date */}
            <OrderStatus status={order.status}>Status: {order.status}</OrderStatus> {/* Display current status */}
            {order.items.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <ProductImage src={item.product.image} alt={item.product.name} /> {/* Display product image */}
                <div style={{ marginLeft: '10px' }}>
                  <p>Product Name: {item.product.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total Price: ₹{item.totalPrice}</p>
                </div>
              </div>
            ))}
            <p>Total Order Price: ₹{order.totalPrice}</p> {/* Total price for the entire order */}
          </OrderItem>
        ))
      )}
    </OrdersContainer>
  );
};

export default MyOrders;
