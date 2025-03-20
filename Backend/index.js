import express from "express";
import "dotenv/config";
import { connect } from "mongoose";
import { adminRouter } from "./routes/adminRoutes.js";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import morgan from "morgan";
import compression from "compression";
import cors from "cors";
import { websiteRoutes } from "./routes/websiteRoutes.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors({ origin: process.env.CORS_ORIGIN.split(",") }));

app.use(morgan("common"));
app.use(compression());
app.use(express.json());
app.use("/admin", adminRouter);
app.use("/website", websiteRoutes);

app.use(authMiddleware);

app.listen(PORT, async () => {
  try {
    await connect(process.env.DB_URL);
    // console.log(`Server started on http://localhost:${PORT}`);
  } catch (error) {
    console.log("Failed to connect to the database:", error);
  }
});
