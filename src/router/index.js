import { Router } from "express";
import productRouter from "./product/index.js";
import studentRouter from "./student/index.js";

const allRoutes = Router();

allRoutes.use("/student", studentRouter);
allRoutes.use("/product", productRouter);

export default allRoutes;
