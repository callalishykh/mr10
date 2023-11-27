import { Router } from "express";
import ProductController from "../../controller/products/index.js";
import ProductValidator from "../../validators/product/index.js";

const productRouter = Router();
productRouter.post("/", ProductValidator.create, ProductController.create);

export default productRouter;
