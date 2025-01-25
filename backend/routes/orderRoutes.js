const express = require("express");
const { placeOrder, getUserOrders } = require("../controllers/orderController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, placeOrder);
router.get("/", protect, getUserOrders);

module.exports = router;
