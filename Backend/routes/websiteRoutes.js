import express from "express";
import { updateProductController, websiteController, websiteget } from "../controllers/websiteController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const websiteRoutes = express.Router();

websiteRoutes.post("/product", authMiddleware, websiteController);
websiteRoutes.get("/product", authMiddleware, websiteget);
websiteRoutes.put("/product/:id", authMiddleware, updateProductController);



export { websiteRoutes };
