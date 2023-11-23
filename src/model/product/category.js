import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import productModel from "./product.js";

const categoryModel = sequelize.define("category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default categoryModel;
