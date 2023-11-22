import { Router } from "express";
import ProductController from "../../controller/products/index.js";

const productRouter = Router();
productRouter.post("/", ProductController.create);

export default productRouter;
