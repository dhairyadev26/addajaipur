import '../styles/HomePage.css'; // Create this CSS file
import React, { useEffect } from 'react'; // Import useEffect from React
import { useNavigate } from "react-router-dom";
import { products } from "../data/productsData";
import styled, { keyframes } from "styled-components";
import adaaLogo from "../assets/logo1.png";
import img1 from "../assets/h2.jpg";
import img2 from "../assets/h3.jpg";
import img3 from "../assets/h4.jpg";
import img4 from "../assets/h5.jpg";
import img5 from "../assets/h6.jpg";
import img6 from "../assets/h7.jpg";
import img7 from "../assets/h8.jpg";
import kurta from "../assets/kurta.jpg";
import saree from "../assets/saree.jpg";
import frock from "../assets/frock.jpg";
import lehengas from "../assets/lehenga.jpg";
import flipkartLogo from "../assets/flipkart.png";
import myntraLogo from "../assets/myntra.png";
import dmMartLogo from "../assets/dmart.png";
import ajioLogo from "../assets/ajio.png";
import aj from "../assets/jaipur.png";
import ah from "../assets/hyderabad.png";





const HomeContent = styled.div`
 
  top: 50%;
  left: 50%;
  margin-left: 30%;
  margin-top: 50%;
  padding-left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: rgb(255, 255, 255);
  font-family: "Maitree", serif;
  z-index: 10;

  h5 {
    font-size: clamp(1.5rem, 2.5vw, 2.7rem);
    font-weight: 400;
    position: relative;
    margin-bottom: 20px;
    margin-left: 60%;
  }

  img {
    width: clamp(200px, 40vw, 600px);
    height: auto;
    position: relative;
    display: block;
    margin-left: 70%;
    margin-top:10%;
  }

  h7 {
    font-size: clamp(1.2rem, 2vw, 2rem);
    display: block;
    white-space: nowrap;
    text-align: center;
    margin-top: 10px;
    
  }

  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 30rem;
    margin-bottom: 50%;
  }
`;


const NewContentSection = styled.div`
  position: relative;
  padding-bottom: 0px;
  background-color:rgb(255, 234, 206);

  color: #333;

  h2 {
    font-size: 2.5rem;
    color:rgb(121, 39, 24);
    margin-bottom: 20px;
    text-align: center;
    font-family: "The Season"
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    text-align: justify;
    max-width: 800px;
    margin: 0 auto;
    
  }
`;
const slideAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 420px;
  background: linear-gradient(to bottom,rgb(255, 234, 206),rgb(255, 246, 234)60%,rgb(251, 247, 234));
`;
const SliderTrack = styled.div`
  display: flex;
  animation: ${slideAnimation} 60s linear infinite;
  width: calc(200%);
`;

const ImageWrapper = styled.div`
  flex: none;
  padding-top:24px;
  width: 10%;
  height: 420px;

  img {
    width: 78%;
    height: 95%;
    object-fit: cover;
    border-radius: 50px;
    box-shadow: 
      0 8px 15px rgba(255, 255, 255, 0.5),
      0 0 25px rgba(255, 255, 255, 0.8),
      0 0 35px rgba(255, 255, 255, 0.6),
      0 0 50px rgba(255, 255, 255, 0.9);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  img:hover {
    transform: translateY(-10px);
    box-shadow: 
      0 10px 20px rgba(255, 255, 255, 0.6),
      0 0 30px rgba(255, 255, 255, 0.9),
      0 0 45px rgba(255, 255, 255, 1),
      0 0 60px rgba(255, 255, 255, 1);
  }
`;

const ParagraphSection = styled.div`
  padding-top: 20px;
  text-align: center;
  background: rgb(251, 247, 234);
  color: rgb(53, 37, 29); /* Set text color to white */
  font-size: 1.2rem;
  line-height: 1.6;
  font-family: 'Maitree', serif;

  p {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
`;
const ProductGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 50px;

  
`;
const Categories = styled.div`
background-color: rgb(251, 247, 234);
padding-top:40px ;
margin-top: -80px;
padding-bottom:15px;

`;
const ProductCard = styled.div`
  width: 250px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h3 {
    font-size: 1.2rem;
    text-align: center;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
const FindUsSection = styled.div`
  background: rgb(251, 247, 234);
  padding: 5px 0px;
  text-align: center;
  h2{
  }
`;

const Scroller = styled.div`
  max-width: 100%;
  overflow: hidden;
  position: relative;
  background: white;
  
`;

const ScrollerInner = styled.div`
background: rgb(251, 247, 234);
  display: flex;
  gap: 8rem;
  width: max-content;
  animation: scroll 30s linear infinite;

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

const BrandCard = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  white-space: nowrap;

  img {
    width: 120px;
    height: auto;
    paddingright:100px;
    object-fit: contain;
  }


`;

// Define the brands array (if it's not passed as a prop)
const brands = [
  { name: "Adaa Jaipur", logo: aj },
  { name: "Adaa Hyderabad", logo: ah },
  { name: "Flipkart", logo: flipkartLogo },
  { name: "Myntra", logo: myntraLogo },
  { name: "D Mart", logo: dmMartLogo },
  { name: "Ajio", logo: ajioLogo },
];

const Home = ({ wishlist, addToWishlist, removeFromWishlist }) => {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const repeatedImages = [...images, ...images];
  const navigate = useNavigate();

  // Scroll to top when Home component is mounted
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, []); // Empty dependency array ensures it only runs once when the component is mounted

  // Get unique categories from products data
  const categories = [...new Set(products.map((product) => product.category))];

  const categoryImages = {
    kurta: kurta,
    saree: saree,
    frock: frock,
    lehengas: lehengas,
  };

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="page">
      <div className="banner">
        <div className="content">
          <HomeContent>
            <h5>Introducing</h5>
            <img src={adaaLogo} alt="ADAA Logo" />
            <div className="text-container">
              <h7>where design tells a story.</h7>
            </div>
          </HomeContent>
        </div>
      </div>

      {/* Gallery Section */}
      <NewContentSection>
        <h2>Discover Timeless Creativity</h2>
        <SliderWrapper>
          <SliderTrack>
            {repeatedImages.map((image, index) => (
              <ImageWrapper key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </ImageWrapper>
            ))}
          </SliderTrack>
        </SliderWrapper>
      </NewContentSection>

      {/* New Paragraph Section */}
      <ParagraphSection>
        <p>
          Explore our gallery showcasing our passion for design, creativity, and innovation.
        </p>
      </ParagraphSection>

      {/* Shop by Category Section */}
      <Categories>
        <div className="shop-by-category">
          <h2>Shop by Category</h2>
          <div className="category-grid">
            {categories.map((category) => {
              // Filter 4 products for the current category
              const categoryProducts = products
                .filter((product) => product.category === category)
                .slice(0, 4);

              return (
                <div
                  key={category}
                  className="category-card"
                  onClick={() => handleCategoryClick(category)}
                  style={{ cursor: 'pointer' }} // Ensures the category card looks clickable
                >
                  <img style={{ width: '100%', height: '10%' }} src={categoryImages[category]} alt={category} />
                  <h3 style={{ paddingLeft: 100 }}>{category}</h3>

                  {/* Display Products */}
                  <ProductGrid>
                    {categoryProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent triggering the category click
                          handleProductClick(product.id);
                        }}
                      >
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                      </ProductCard>
                    ))}
                  </ProductGrid>
                </div>
              );
            })}
          </div>
        </div>
      </Categories>

      {/* Find Us On Section */}
      <FindUsSection>
        <h2>Find Us On</h2>
        <Scroller>
          <ScrollerInner>
            {brands.concat(brands).map((brand, index) => (
              <BrandCard key={index}>
                <img src={brand.logo} alt={brand.name} />
              </BrandCard>
            ))}
          </ScrollerInner>
        </Scroller>
      </FindUsSection>
    </div>
  );
};

export default Home;