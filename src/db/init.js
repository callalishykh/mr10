import productModel from "../model/product/product.js";
import unitModel from "../model/product/unit.js";
import studentModel from "../model/student/student.js";

const dbInit = async () => {
  await unitModel.sync({
    alter: true,
    force: false,
  });
  await productModel.sync({
    alter: true,
    force: false,
  });
  await studentModel.sync({
    alter: true,
    force: false,
  });
};

export default dbInit;
