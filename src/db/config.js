import { Sequelize } from "sequelize";

const sequelize = new Sequelize("mr10", "postgres", "password", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  logging: false,
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default sequelize;
