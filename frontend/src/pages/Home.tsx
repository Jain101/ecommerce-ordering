// src/pages/Home.tsx
import React from "react";
import OrderForm from "../components/OrderForm";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Create New Order</h1>
      <OrderForm />
    </div>
  );
};

export default Home;
