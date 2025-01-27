import React from "react";
import { Link } from "react-router-dom";

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  const cardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    backgroundColor: "#fff",
  };

  const imageStyle = {
    width: "300px",
    height: "400px",
    objectFit: "cover",
    borderRadius: "8px",
    marginRight: "16px",
    marginLeft: "20px",
    marginTop: "20px",
    marginBottom: "20px",
  };

  const detailsStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    textAlign: "left", // Aligns text to the left
  };

  const actionsStyle = {
    display: "flex",
    gap: "8px",
    marginTop: "8px",
  };

  const buttonStyle = {
    padding: "8px 12px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>
      {wishlist.length > 0 ? (
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div className="wishlist-card" key={item.id} style={cardStyle}>
              <img src={item.image} alt={item.name} style={imageStyle} />
              <div style={detailsStyle}>
                <p style={{ fontWeight: "bold", fontSize: "22px", textAlign : "left", marginLeft: "20px", marginTop: "-15%" }}>{item.name}</p>
                <p style={{ textAlign: "left", marginLeft: "20px",marginTop: "10px" }}>Price: ${item.originalPrice}</p>
                <div style={actionsStyle}>
                  <Link to={`/products/${item.id}`}>
                    <button style={{ ...buttonStyle, backgroundColor: "#000", color: "#fff", marginTop: "10px", marginLeft: "20px" }}>View Details</button>
                  </Link>
                  <button
                    style={{ ...buttonStyle, backgroundColor: "#dc3545", color: "#fff", marginTop: "10px" }}
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty. Start adding your favorite items!</p>
      )}
    </div>
  );
};

export default Wishlist;
