import express from "express";
import cors from "cors";
import router from "./routes";

const port = process.env.APP_PORT;
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.listen(port, () => {
  console.log(`User microservice started on port:${port}`);
});
