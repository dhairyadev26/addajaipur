import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Products.css";
import { FaHeart } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa";
import ProductModal from "../components/ProductModal";
import { products } from "../data/productsData";

const Products = ({ addToWishlist, removeFromWishlist, wishlist = [] }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOption, setSortOption] = useState("");
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [],
  });
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    priceRange: true,
    discount: true,
  });

  const handleWishlistToggle = (product) => {
    if (wishlist.some((item) => item.id === product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (checked) {
        updatedFilters[name] = [...(prevFilters[name] || []), value];
      } else {
        updatedFilters[name] = prevFilters[name].filter((item) => item !== value);
      }
      return updatedFilters;
    });
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const getPriceRanges = () => {
    const maxPrice = Math.max(
      ...products.map((product) => product.originalPrice)
    );
    const ranges = [];
    for (let i = 0; i <= maxPrice; i += 500) {
      ranges.push({ min: i, max: i + 499 });
    }
    return ranges;
  };

  const getFilteredProducts = () => {
    return products.filter((product) => {
      const discountedPrice =
        product.originalPrice -
        (product.originalPrice * product.discountPercentage) / 100;

      const matchesCategory =
        !filters.category.length || filters.category.includes(product.category);
      const matchesPriceRange =
        !filters.priceRange.length ||
        filters.priceRange.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return discountedPrice >= min && discountedPrice <= max;
        });
        const matchesDiscount =
  !filters.discount?.length || // Use optional chaining with a fallback
  filters.discount.some((range) => {
    const [min, max] = range.split("-").map(Number);
    return product.discountPercentage >= min && product.discountPercentage <= max;
  });

      return matchesCategory && matchesPriceRange && matchesDiscount;
    });
  };

  const getSortedProducts = () => {
    let sortedProducts = getFilteredProducts();

    switch (sortOption) {
      case "price-high-to-low":
        sortedProducts.sort((a, b) => {
          const aDiscountedPrice =
            a.originalPrice - (a.originalPrice * a.discountPercentage) / 100;
          const bDiscountedPrice =
            b.originalPrice - (b.originalPrice * b.discountPercentage) / 100;
          return bDiscountedPrice - aDiscountedPrice;
        });
        break;
      case "price-low-to-high":
        sortedProducts.sort((a, b) => {
          const aDiscountedPrice =
            a.originalPrice - (a.originalPrice * a.discountPercentage) / 100;
          const bDiscountedPrice =
            b.originalPrice - (b.originalPrice * b.discountPercentage) / 100;
          return aDiscountedPrice - bDiscountedPrice;
        });
        break;
      case "discount":
        sortedProducts.sort((a, b) => b.discountPercentage - a.discountPercentage);
        break;
      case "newest":
        sortedProducts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      case "rating":
        sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        break;
    }

    return sortedProducts;
  };

  const renderProducts = () =>
    getSortedProducts().map((product) => {
      const discountedPrice =
        product.originalPrice -
        (product.originalPrice * product.discountPercentage) / 100;

      const isInWishlist = wishlist.some((item) => item.id === product.id);

      return (
        <div className="product-card" key={product.id}>
          <Link to={`/products/${product.id}`} className="product-link">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <p>{product.name}</p>
              {/* Product Ratings */}
              {product.rating && (
                <p className="product-rating">
                  <span className="stars">
                    {"★".repeat(Math.round(product.rating.rate)) +
                      "☆".repeat(5 - Math.round(product.rating.rate))}
                  </span>
                  <span className="rating-score">
                    {product.rating.rate.toFixed(1)} / 5
                  </span>
                  <span className="rating-count">({product.rating.count} reviews)</span>
                </p>
              )}
              <p className="price">
                <span className="discounted-price">${discountedPrice.toFixed(2)}</span>
                <span className="original-price">
                  <del>${product.originalPrice.toFixed(2)}</del>
                </span>
              </p>
              <p className="discount-percentage">{product.discountPercentage}% off</p>
            </div>
          </Link>
          <div className="wishlist-icon-container">
            <span
              className="wishlist-icon"
              onClick={(e) => {
                e.stopPropagation();
                handleWishlistToggle(product);
              }}
            >
              <FaHeart color={isInWishlist ? "red" : "gray"} size={24} />
            </span>
          </div>
          <button onClick={() => setSelectedProduct(product)}>Quick View</button>
        </div>
      );
    });

  return (
    <div className="products-page">
      <div className="filters-container">
        <h3>Filters</h3>
        <div className="filter-section">
          <div className="filter-header" onClick={() => toggleSection("category")}>
            <h4>Category</h4>
            {expandedSections.category ? <FaMinus /> : <FaPlus />}
          </div>
          {expandedSections.category && (
            <div className="filter-category">
              {[...new Set(products.map((product) => product.category))]
                .filter((category) => category)
                .map((category) => (
                  <div className="filter-item" key={category}>
                    <input
                      type="checkbox"
                      id={`category-${category}`}
                      name="category"
                      value={category}
                      onChange={handleFilterChange}
                    />
                    <label htmlFor={`category-${category}`}>{category}</label>
                  </div>
                ))}
            </div>
          )}
        </div>
        <div className="filter-section">
          <div className="filter-header" onClick={() => toggleSection("priceRange")}>
            <h4>Price Range</h4>
            {expandedSections.priceRange ? <FaMinus /> : <FaPlus />}
          </div>
          {expandedSections.priceRange && (
            <div className="filter-price">
              {getPriceRanges()
                .filter((range) =>
                  products.some(
                    (product) =>
                      product.originalPrice -
                        (product.originalPrice * product.discountPercentage) / 100 >=
                        range.min &&
                      product.originalPrice -
                        (product.originalPrice * product.discountPercentage) / 100 <=
                        range.max
                  )
                )
                .map((range, index) => (
                  <div className="filter-item" key={index}>
                    <input
                      type="checkbox"
                      id={`price-${index}`}
                      name="priceRange"
                      value={`${range.min}-${range.max}`}
                      onChange={handleFilterChange}
                    />
                    <label htmlFor={`price-${index}`}>
                      ${range.min} - ${range.max}
                    </label>
                  </div>
                ))}
            </div>
          )}
          <div className="filter-section">
  <div className="filter-header" onClick={() => toggleSection("discount")}>
    <h4>Discount</h4>
    {expandedSections.discount ? <FaMinus /> : <FaPlus />}
  </div>
  {expandedSections.discount && (
    <div className="filter-discount">
      {[0, 20, 40, 60, 80].map((start, index) => {
        const end = start + 20 > 100 ? 100 : start + 20;
        return (
          <div className="filter-item" key={index}>
            <input
              type="checkbox"
              id={`discount-${index}`}
              name="discount"
              value={`${start}-${end}`}
              onChange={handleFilterChange}
            />
            <label htmlFor={`discount-${index}`}>
              {start}% - {end > 100 ? "100%" : `${end}%`}
            </label>
          </div>
        );
      })}
    </div>
  )}
</div>

        </div>
      </div>
      <div className="products-container">
        <h2>PRODUCTS</h2>
        <div className="sort-options">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortOption} onChange={handleSortChange}>
            <option value="">Select</option>
            <option value="price-high-to-low">Price (Highest First)</option>
            <option value="price-low-to-high">Price (Lowest First)</option>
            <option value="discount">Discount</option>
            <option value="newest">What's New</option>
            <option value="rating">Ratings</option>
          </select>
        </div>
        <div className="product-list">{renderProducts()}</div>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
