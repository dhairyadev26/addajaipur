import { Link } from "react-router-dom"; // Import Link for navigation

const Products = () => {

  const products = [
    { id: 1, name: "Jaipur Ethnic Kurta", price: 30, image: "kurta.jpg" },
    { id: 2, name: "Jaipur Ethnic Saree", price: 50, image: "saree.jpg" },
    // Add more products as needed
  ];

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "1rem" }}>
          <img src={product.image} alt={product.name} width={100} />
          <p>{product.name}</p>
          <p>Price: ${product.price}</p>
          {/* Corrected Link to navigate to the ProductDetails page */}
          <Link to={`/products/${product.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
