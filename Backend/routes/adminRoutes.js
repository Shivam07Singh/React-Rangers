import express from "express";
import { login, signUp, forgetpassword, resetpassword } from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.post("/signup", signUp);
adminRouter.post("/login", login);
adminRouter.post("/forgetpassword", forgetpassword);
adminRouter.post("/resetpassword", resetpassword);
export { adminRouter };
