// src/kafka/producer.ts
import { kafka } from "./client";

const producer = kafka.producer();

export const produceOrder = async (order: any) => {
  await producer.connect();

  const message = {
    key: order.id,
    value: JSON.stringify(order),
  };

  await producer.send({
    topic: "orders",
    messages: [message],
  });

  console.log(`✅ Order sent to Kafka: ${order.id}`);
};
