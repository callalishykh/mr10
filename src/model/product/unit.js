import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import productModel from "./product.js";

const unitModel = sequelize.define("unit", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

unitModel.hasMany(productModel);
productModel.belongsTo(unitModel);

export default unitModel;
