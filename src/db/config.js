import { Sequelize } from "sequelize";

const envData = process.env;

const sequelize = new Sequelize(
  envData.DB_NAME,
  envData.DB_USER,
  envData.DB_PASSWORD,
  {
    host: envData.DB_HOST,
    port: envData.DB_PORT,
    dialect: envData.DB_DIALECT,
    logging: false,
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default sequelize;
