import categoryModel from "../../model/product/category.js";
import categoryProductModel from "../../model/product/categoryProduct.js";
import productModel from "../../model/product/product.js";
import unitModel from "../../model/product/unit.js";

const ProductController = {
  create: async (req, res) => {
    // const unit = await unitModel.create({ name: "u2" });
    // const product = await productModel.create({ name: "p4" });

    // const data = await productModel.findByPk(2, {
    //   include: [unitModel],
    //   logging: true,
    // });

    // const data = await unitModel.findByPk(2, {
    //   include: [productModel],
    //   logging: true,
    // });

    // const data = await categoryModel.create({
    //   name: "c2",
    // });

    // await categoryProductModel.create({
    //   categoryId: 1,
    //   productId: 2,
    // });
    // await categoryProductModel.create({
    //   categoryId: 1,
    //   productId: 3,
    // });
    // await categoryProductModel.create({
    //   categoryId: 1,
    //   productId: 4,
    // });

    // await categoryProductModel.create({
    //   categoryId: 2,
    //   productId: 2,
    // });
    // await categoryProductModel.create({
    //   categoryId: 2,
    //   productId: 3,
    // });
    // await categoryProductModel.create({
    //   categoryId: 2,
    //   productId: 4,
    // });

    // const data = await productModel.findAll({
    //   include: [categoryModel],
    // });
    const data = await categoryModel.findAll({
      // include: [{ model: productModel, attributes: ["name"] }],
      // include: [productModel],
      include: productModel,
    });

    res.json({
      message: "product created",
      data,
    });
  },
};

export default ProductController;
