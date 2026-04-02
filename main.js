import express from 'express';
import router from './routes/routes.js';
const app = express();
const port = 8000;

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});