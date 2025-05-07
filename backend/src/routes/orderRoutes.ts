// src/routes/orderRoutes.ts
import express from "express";
import { produceOrder } from "../kafka/producer";
import { Order } from "../types/order";

const router = express.Router();

// Route to create a new order
router.post("/create-order", async (req: any, res: any) => {
  const { customerName, product, quantity, price }: Order = req.body;

  // Validate order data
  if (!customerName || !product || !quantity || !price) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const newOrder: Order = {
    id: Math.random().toString(36).substr(2, 9), // Random ID for simplicity
    customerName,
    product,
    quantity,
    price,
    timestamp: new Date().toISOString(),
  };

  try {
    await produceOrder(newOrder);
    return res
      .status(200)
      .json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to create order." });
  }
});

export default router;
