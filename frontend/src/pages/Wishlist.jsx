import React from "react";
import { Link } from "react-router-dom";

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>
      {wishlist.length > 0 ? (
        <div className="wishlist-items">
          {wishlist.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>Price: ${item.originalPrice}</p>
              <div className="wishlist-actions">
                <Link to={`/products/${item.id}`}>
                  <button>View Details</button>
                </Link>
                <button onClick={() => removeFromWishlist(item.id)}>
                  Remove
                </button>
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
