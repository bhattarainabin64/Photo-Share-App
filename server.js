require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");

const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/authRoutes");
const photoRoutes = require("./src/routes/photoRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// app.use(cors());  // Ensure cross-origin requests are allowed
// app.use(helmet());  // Adds security-related HTTP headers
app.use(compression());  // Compresses responses
app.use(morgan("dev"));  // Logging requests in development mode

// Built-in middleware for parsing JSON and URL-encoded data
app.use(express.json());  // For parsing application/json
app.use(express.urlencoded({ extended: true }));  // For parsing application/x-www-form-urlencoded

// Connect to DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/photos", photoRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}🚀🚀🚀🚀`));
