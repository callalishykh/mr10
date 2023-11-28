import { Router } from "express";
import authRouter from "./auth/index.js";
import productRouter from "./product/index.js";
import studentRouter from "./student/index.js";

const allRoutes = Router();

allRoutes.use("/student", studentRouter);
allRoutes.use("/product", productRouter);
allRoutes.use("/", authRouter);

export default allRoutes;
