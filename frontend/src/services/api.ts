// src/services/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/orders", // Adjust the base URL if necessary
});

export const createOrder = async (orderData: any) => {
  try {
    const response = await api.post("/create-order", orderData);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};
