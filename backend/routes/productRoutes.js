const express = require("express");
const { getAllProducts, getProductById, createProduct } = require("../controllers/productController");
const { verifyToken } = require("../middleware/authMiddleware"); // Import the authentication middleware
const router = express.Router();

// Public route to get all products
router.get("/", getAllProducts);

// Public route to get a product by ID
router.get("/:id", getProductById);

// Protected route to create a new product (only accessible by authenticated users)
router.post("/", verifyToken, createProduct);

module.exports = router;
``