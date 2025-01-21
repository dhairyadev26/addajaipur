import React from "react";
import styled from "styled-components";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <Info>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </Info>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  width: 300px;
  padding: 1rem;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Info = styled.div`
  margin-top: 1rem;

  h3 {
    font-size: 1.2rem;
    color: #d35400;
  }

  p {
    color: #555;
  }
`;
