// src/server.ts
import app from "./app";
import { runConsumer } from "./kafka/consumer";

// Start the Kafka consumer
runConsumer().catch((error) => {
  console.error("Error starting Kafka consumer:", error);
});

// Start the Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
