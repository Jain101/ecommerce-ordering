// src/kafka/client.ts
import { Kafka } from "kafkajs";
import dotenv from "dotenv";

dotenv.config();

export const kafka = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID || "my-app",
  brokers: [process.env.KAFKA_BROKER!], // e.g. "<cluster>.confluent.cloud:9092"
  ssl: process.env.KAFKA_SSL === "true",
  sasl: {
    mechanism: "plain", // Confluent uses SASL/PLAIN
    username: process.env.KAFKA_USERNAME!,
    password: process.env.KAFKA_PASSWORD!,
  },
  connectionTimeout: 1000000,
});