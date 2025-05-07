// src/kafka/consumer.ts
import { kafka } from "./client";

const consumer = kafka.consumer({ groupId: "order-processing-group" });
const producer = kafka.producer();

export const runConsumer = async () => {
  await consumer.connect();
  await producer.connect();

  await consumer.subscribe({ topic: "orders", fromBeginning: false });

  await consumer.run({
    eachMessage: async ({ message }) => {
      if (!message.value) return;

      const order = JSON.parse(message.value.toString());
      console.log(`📥 Order received: ${order.id}`);

      // Simulate processing delay
      setTimeout(async () => {
        const statusUpdate = {
          orderId: order.id,
          status: "processed",
          timestamp: new Date().toISOString(),
        };

        await producer.send({
          topic: "order-status",
          messages: [
            {
              key: order.id,
              value: JSON.stringify(statusUpdate),
            },
          ],
        });

        console.log(`✅ Order processed: ${order.id}`);
      }, 2000);
    },
  });
};
