const Order = require("../models/Order");

const placeOrder = async (req, res) => {
  const { products, totalAmount, address } = req.body;

  try {
    const order = await Order.create({
      userId: req.user.id,
      products,
      totalAmount,
      address,
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { placeOrder, getUserOrders };
