// src/pages/MyOrders.jsx
import React from 'react';
import styled from 'styled-components';
import { useOrders } from '../context/OrdersContext';

const OrdersContainer = styled.div`
  padding: 2rem;
  max-width: 700px; /* Slightly wider for better spacing */
  margin: auto;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const OrderItem = styled.div`
  border: 1px solid #ddd;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 12px;
  background-color: #fff;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.02); /* Slight hover effect */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  width: 70px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover; /* Ensures images maintain aspect ratio */
  border: 1px solid #ddd;
`;

const OrderStatus = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  color: ${(props) =>
    props.status === "Delivered"
      ? "green"
      : props.status === "Shipped"
      ? "orange"
      : "red"};
`;

const OrderHeader = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const OrderDetails = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.3rem;
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
`;

const ProductText = styled.div`
  flex-grow: 1;
  font-size: 1rem;
`;

const PriceText = styled.p`
  font-weight: bold;
  font-size: 1.1rem;
  color: #333;
`;

const MyOrders = () => {
  const { orders } = useOrders();

  return (
    <OrdersContainer>
      <h2 style={{ textAlign: "center", color: "#222", marginBottom: "1.5rem", fontFamily:"-moz-initial" }}>My Orders</h2>
      {orders.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <OrderItem key={index}>
            <OrderHeader>Order #{index + 1}</OrderHeader>
            <OrderDetails>Order Date: {new Date(order.orderDate).toLocaleDateString()}</OrderDetails>
            <OrderStatus status={order.status}>Status: {order.status}</OrderStatus>
            
            {order.items.map((item, idx) => (
              <ProductInfo key={idx}>
                <ProductImage src={item.product.image} alt={item.product.name} />
                <ProductText>
                  <p><strong>{item.product.name}</strong></p>
                  <OrderDetails>Quantity: {item.quantity}</OrderDetails>
                </ProductText>
                <PriceText>₹{item.totalPrice}</PriceText>
              </ProductInfo>
            ))}

            <h4 style={{ marginTop: "1rem", textAlign: "right", color: "#9b2d20" }}>
              Total Order Price: ₹{order.totalPrice}
            </h4>
          </OrderItem>
        ))
      )}
    </OrdersContainer>
  );
};

export default MyOrders;
