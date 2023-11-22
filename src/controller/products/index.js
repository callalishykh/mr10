import productModel from "../../model/product/product.js";
import unitModel from "../../model/product/unit.js";

const ProductController = {
  create: async (req, res) => {
    // const unit = await unitModel.create({ name: "u2" });
    const product = await productModel.create({ name: "p3", unitId: 2 });

    // const data = await productModel.findByPk(2, {
    //   include: [unitModel],
    //   logging: true,
    // });

    const data = await unitModel.findByPk(2, {
      include: [productModel],
      logging: true,
    });

    res.json({
      message: "product created",
      data,
    });
  },
};

export default ProductController;
