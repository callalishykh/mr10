import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import categoryModel from "./category.js";
import productModel from "./product.js";

const categoryProductModel = sequelize.define("categoryProduct", {
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: productModel,
      key: "id",
    },
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: categoryModel,
      key: "id",
    },
  },
});

categoryModel.belongsToMany(productModel, { through: categoryProductModel });
productModel.belongsToMany(categoryModel, { through: categoryProductModel });

export default categoryProductModel;
