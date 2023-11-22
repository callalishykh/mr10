import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const productModel = sequelize.define("product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default productModel;
