// src/app.ts
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import orderRoutes from "./routes/orderRoutes";

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON bodies

// Register routes
app.use("/api/orders", orderRoutes);

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Order Service is running." });
});

export default app;
