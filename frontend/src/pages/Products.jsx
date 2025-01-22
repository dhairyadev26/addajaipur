import React from "react";
import { Link } from "react-router-dom";
import "../styles/Products.css";

const Products = () => {
  const kurtis = [
    { id: 1, name: "Jaipur Ethnic Kurta", price: 30, image: "kurta1.jpg" },
    { id: 2, name: "Floral Printed Kurta", price: 35, image: "kurta2.jpg" },
    { id: 3, name: "Casual Cotton Kurta", price: 25, image: "kurta3.jpg" },
    { id: 4, name: "Designer Party Kurta", price: 40, image: "kurta4.jpg" },
  ];

  const frocks = [
    { id: 5, name: "Summer Floral Frock", price: 20, image: "frock1.jpg" },
    { id: 6, name: "Casual Denim Frock", price: 30, image: "frock2.jpg" },
    { id: 7, name: "Party Wear Frock", price: 50, image: "frock3.jpg" },
    { id: 8, name: "Ethnic Printed Frock", price: 35, image: "frock4.jpg" },
  ];

  const saris = [
    { id: 9, name: "Banarasi Silk Saree", price: 100, image: "saree1.jpg" },
    { id: 10, name: "Kanjeevaram Saree", price: 120, image: "saree2.jpg" },
    { id: 11, name: "Chiffon Designer Saree", price: 130, image: "saree3.jpg" },
    { id: 12, name: "Traditional Cotton Saree", price: 90, image: "saree4.jpg" },
  ];

  const renderProducts = (products) => {
    return products.map((product) => (
      <div className="product-card" key={product.id}>
        <img src={product.image} alt={product.name} />
        <p>{product.name}</p>
        <p>Price: ${product.price}</p>
        <Link to={`/products/${product.id}`}>
          <button>View Details</button>
        </Link>
      </div>
    ));
  };

  return (
    <div className="products-container">
      <h2>Products</h2>

      <div className="product-category">
        <h3>Kurtis</h3>
        <div className="product-list">{renderProducts(kurtis)}</div>
      </div>

      <div className="product-category">
        <h3>Frocks</h3>
        <div className="product-list">{renderProducts(frocks)}</div>
      </div>

      <div className="product-category">
        <h3>Saris</h3>
        <div className="product-list">{renderProducts(saris)}</div>
      </div>
    </div>
  );
};

export default Products;
