import express from 'express';
const app = express();
const port = 3004;
app.listen(port, () => {
  console.log(`WebSocket server is running at http://localhost:${port}`);
});