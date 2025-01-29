import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/db.js'; // Ensure this path is correct
import authRoutes from './routes/authRoutes.js'; // Import auth routes
//import productRoutes from './routes/productRoutes.js'; // Import product routes

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes); // Authentication routes
//app.use('/api/products', productRoutes); // Product management routes
// Uncomment these if you have them implemented
// app.use("/api/cart", require("./routes/cartRoutes"));
// app.use("/api/orders", require("./routes/orderRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
