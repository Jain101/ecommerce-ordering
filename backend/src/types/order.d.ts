// src/types/order.d.ts

export interface Order {
  id: string;
  customerName: string;
  product: string;
  quantity: number;
  price: number;
  timestamp: string;
}

export interface OrderStatus {
  orderId: string;
  status: "processed" | "shipped" | "delivered";
  timestamp: string;
}
