// src/components/OrderForm.tsx
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { createOrder } from "../services/api";

const OrderForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const newOrder = await createOrder(values);
      message.success(`Order created: ${newOrder.order.id}`);
    } catch (error) {
      message.error("Failed to create order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Customer Name"
        name="customerName"
        rules={[{ required: true, message: "Please input customer name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Product"
        name="product"
        rules={[{ required: true, message: "Please input product!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Quantity"
        name="quantity"
        rules={[{ required: true, message: "Please input quantity!" }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please input price!" }]}
      >
        <Input type="number" />
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={loading}>
        Create Order
      </Button>
    </Form>
  );
};

export default OrderForm;
