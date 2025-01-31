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
    discount: [], 
    rating: [], // Added for rating
    size: [], 
    color: [],

  });
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    priceRange: true,
    discount: true,
    rating: true, // Added for ratingo'xz
    size: true, 
    color: true,
    
  });
  const getUniqueColors = () => {
    const colorMap = new Map();
  
    products.forEach((product) => {
      if (Array.isArray(product.colors)) {
        product.colors.forEach(({ name, code }) => {
          if (!colorMap.has(name)) {
            colorMap.set(name, code); // Store only the first code for each name
          }
        });
      }
    });
  
    return Array.from(colorMap.entries()).map(([name, code]) => ({
      name,
      code, // Single code for each color name
    }));
  };
  
  const getUniqueSizes = () => {
    const sizeSet = new Set();
  
    // Ensure products exist and is an array
    if (Array.isArray(products)) {
      products.forEach((product) => {
        // Ensure product.sizes is defined and is an array
        if (Array.isArray(product.sizes)) {
          product.sizes.forEach((sizeObj) => {
            if (sizeObj.stock > 0) {
              sizeSet.add(sizeObj.size); // Include only sizes with stock
            }
          });
        }
      });
    }
  
    return Array.from(sizeSet).sort(); // Return sorted unique sizes
  };
  
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
  const matchesRating =
  !filters.rating?.length ||
  filters.rating.some((minRating) => product.rating.rate >= Number(minRating));
  const matchesSize =
  !filters.size?.length ||
  filters.size.some((selectedSize) =>
    product.sizes?.some(
      (sizeObj) => sizeObj.size === selectedSize && sizeObj.stock > 0
    )
  );
  const matchesColor =
  !filters.color?.length ||
  filters.color.some((selectedColor) =>
    product.colors?.some(
      (color) => color.name === selectedColor // Match based on color name
    )
  );


      return matchesCategory && matchesPriceRange && matchesDiscount&& matchesRating &&matchesSize && matchesColor;
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
              style={{ marginLeft: "-60px" }} // Adjust the value as needed
              onClick={(e) => {
                e.stopPropagation();
                handleWishlistToggle(product);
              }}
            >
              <FaHeart color={isInWishlist ? "red" : "white"} size={24} />
            </span>
          </div>
          <button 
  style={{ backgroundColor: '#9e2515', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '0.25rem', marginTop: "-20px" }} 
  onClick={() => setSelectedProduct(product)}
>
  Quick View
</button>

        </div>
      );
    });







    return (
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Left Sidebar for Filters */}
        <div
          style={{
            width: "50%",
            padding: "70px",
            paddingTop:"20px",
            marginTop: "70px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "rgb(255, 252, 245)",
            position: "sticky",
            top: "10px",
            height: "fit-content",
          }}
        >
          <h3 style={{ marginBottom: "16px" }}>Filters</h3>
    


          {/* Category Filter */}
        <div style={{ marginBottom: "16px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
              marginBottom: "8px",
            }}
            onClick={() => toggleSection("category")}
          >
            <h4>Category</h4>
            {expandedSections.category ? <FaMinus /> : <FaPlus />}
          </div>
          {expandedSections.category && (
            <div>
              {[...new Set(products.map((product) => product.category))]
                .filter(Boolean)
                .map((category) => {
                  const productCount = products.filter(
                    (product) => product.category === category
                  ).length;

                  return (
                    <div
                      key={category}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "8px",
                      }}
                    >
                      <input
                        type="checkbox"
                        id={`category-${category}`}
                        name="category"
                        value={category}
                        onChange={handleFilterChange}
                        style={{ marginRight: "8px",  marginBottom: "-5px"}} // Reduced space
                      />
                      <label
                        htmlFor={`category-${category}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "-4px"
                           // Added gap for minimal spacing
                        }}
                      >
                        <span  style={{ marginRight: "8px" }}>{category}</span>
                        <span style={{ color: "#888" }}>({productCount})</span>
                      </label>
                    </div>
                  );
                })}
            </div>
          )}
        </div>

    
          {/* Price Range Filter */}
          <div style={{ marginBottom: "16px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                marginBottom: "8px",
              }}
              onClick={() => toggleSection("priceRange")}
            >
              <h4>Price Range</h4>
              {expandedSections.priceRange ? <FaMinus /> : <FaPlus />}
            </div>
            {expandedSections.priceRange && (
              <div>
                {getPriceRanges()
                  .filter((range) =>
                    products.some(
                      (product) =>
                        product.originalPrice -
                          (product.originalPrice * product.discountPercentage) /
                            100 >=
                          range.min &&
                        product.originalPrice -
                          (product.originalPrice * product.discountPercentage) /
                            100 <=
                          range.max
                    )
                  )
                  .map((range, index) => {
                    const productCount = products.filter(
                      (product) =>
                        product.originalPrice -
                          (product.originalPrice * product.discountPercentage) /
                            100 >=
                          range.min &&
                        product.originalPrice -
                          (product.originalPrice * product.discountPercentage) /
                            100 <=
                          range.max
                    ).length;
    
                    return (
                      <div
                        key={index}
                        style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
                      >
                        <input
                          type="checkbox"
                          id={`price-${index}`}
                          name="priceRange"
                          value={`${range.min}-${range.max}`}
                          onChange={handleFilterChange}
                          style={{ marginRight: "8px" }}
                        />
                        <label
                          htmlFor={`price-${index}`}
                          style={{   display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            fontSize: "14px" }}
                        >
                          <span style={{ flexGrow: 1, whiteSpace: "nowrap" }}>
                            ${range.min} - ${range.max}
                          </span>
                          <span style={{ color: "#888" ,flexShrink: 0, marginLeft: "8px", }}>({productCount})</span>
                        </label>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
    
          {/* Discount Filter */}
          <div style={{ marginBottom: "16px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                marginBottom: "8px",
              }}
              onClick={() => toggleSection("discount")}
            >
              <h4>Discount</h4>
              {expandedSections.discount ? <FaMinus /> : <FaPlus />}
            </div>
            {expandedSections.discount && (
              <div>
                {[0, 20, 40, 60, 80].map((start, index) => {
                  const end = start + 20 > 100 ? 100 : start + 20;
                  const productCount = products.filter((product) => {
                    const discount = product.discountPercentage;
                    return discount >= start && discount < end;
                  }).length;
    
                  return (
                    <div
                      key={index}
                      style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
                    >
                      <input
                        type="checkbox"
                        id={`discount-${index}`}
                        name="discount"
                        value={`${start}-${end}`}
                        onChange={handleFilterChange}
                        style={{ marginRight: "8px"}}
                      />
                      <label
                        htmlFor={`discount-${index}`}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                          fontSize: "14px", // Adjust font size if needed
                        }}
                      >
                        <span style={{ flexGrow: 1, whiteSpace: "nowrap" }}>
                          {start}% - {end > 100 ? "100%" : `${end}%`}
                        </span>
                        <span style={{ color: "#888" ,flexShrink: 0,marginLeft: "8px",}}>({productCount})</span>
                      </label>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* rating Filter */}
          <div style={{ marginBottom: "16px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                marginBottom: "8px",
              }}
            onClick={() => toggleSection("rating")}
          >
            <h4>Rating</h4>
            {expandedSections.rating ? <FaMinus /> : <FaPlus />}
          </div>
          {expandedSections.rating && (
            <div className="filter-rating">
              {[5, 4, 3, 2, 1].map((stars) => {
                // Calculate product count for ratings equal to or higher than the current star level
                const productCount = products.filter(
                  (product) => product.rating?.rate >= stars
                ).length;

                return (
                  <div
                    className="filter-item"
                    key={stars}
                    style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
                  >
                    <input
                      type="checkbox"
                      id={`rating-${stars}`}
                      name="rating"
                      value={stars}
                      onChange={handleFilterChange}
                      style={{ marginRight: "-20px", marginLeft: "-30%" }}
                    />
                    <label
                      htmlFor={`rating-${stars}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>
                        {"★".repeat(stars)} and up
                      </span>
                      <span style={{ color: "#888" }}>({productCount})</span>
                    </label>
                  </div>
                );
              })}
            </div>
          )}
          </div>
          
          {/* Size Filter */}
          <div style={{ marginBottom: "16px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                marginBottom: "8px",
              }}
            onClick={() => toggleSection("size")}
          >
            <h4>Size</h4>
            {expandedSections.size ? <FaMinus /> : <FaPlus />}
          </div>
          {expandedSections.size && (
            <div className="filter-size">
              {getUniqueSizes().map((size) => {
                // Calculate product count for the current size
                const productCount = products.filter((product) =>
                  product.sizes?.some((productSize) => productSize.size === size)
                ).length;

                return (
                  <div
                    className="filter-item"
                    key={size}
                    style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
                  >
                    <input
                      type="checkbox"
                      id={`size-${size}`}
                      name="size"
                      value={size}
                      onChange={handleFilterChange}
                      style={{ marginRight: "-30px", marginLeft: "-20%" }}
                    />
                    <label
                      htmlFor={`size-${size}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>{size}</span>
                      <span style={{ color: "#888", marginLeft: "-20px"  }}>({productCount})</span>
                    </label>
                  </div>
                );
              })}
            </div>
          )}
          </div>

         
          <div style={{ marginBottom: "16px" }}>
          <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                marginBottom: "8px",
              }}
              onClick={() =>
                setExpandedSections((prev) => ({
                  ...prev,
                  colors: !prev.colors,
                }))
              }
          > <h4>Colors</h4>

            {expandedSections.size ? <FaMinus /> : <FaPlus />}
            </div>
           
          {expandedSections.colors && (
            <div className="filter-options">
              {getUniqueColors().map((color) => {
                // Get the count of products for this color name
                const productCount = products.filter((product) =>
                  product.colors?.some((prodColor) => prodColor.name === color.name)
                ).length;

                return (
                  <div
                    key={color.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <input
                      type="checkbox"
                      id={`color-${color.name}`}
                      checked={filters.color.includes(color.name)}
                      onChange={(e) => {
                        const updatedColors = e.target.checked
                          ? [...filters.color, color.name]
                          : filters.color.filter((c) => c !== color.name);

                        setFilters((prev) => ({
                          ...prev,
                          color: updatedColors,
                        }));
                      }}
                      style={{ marginRight: "8px" }}
                    />
                    <label
                      htmlFor={`color-${color.name}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <span
                        style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          backgroundColor: color.code,
                          marginRight: "8px",
                          border: "1px solid #ccc",
                        }}
                      ></span>
                      <span style={{ marginRight: "8px" }}>{color.name}</span>
                      <span style={{ color: "#888" }}>({productCount})</span>
                    </label>
                  </div>
                );
              })}
            </div>
          )}
        </div>



      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div className="products-container" >
        <h2>PRODUCTS</h2>
        <div className="sort-options" style={{ marginBottom: '30px',marginRight: "-65%" }} >
          <label htmlFor="sort" style={{ fontSize: "20px" }}>Sort by:</label>
          <select id="sort" value={sortOption} onChange={handleSortChange} style={{ padding: '7px', marginLeft:"10px", borderRadius: '4px', border: '1px solid #ccc' }}>
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
    </div>
  );
};

export default Products;