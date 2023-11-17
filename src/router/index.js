import { Router } from "express";
import studentRouter from "./student/index.js";

const allRoutes = Router();

allRoutes.use("/student", studentRouter);

export default allRoutes;
