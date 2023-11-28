import categoryModel from "../model/product/category.js";
import categoryProductModel from "../model/product/categoryProduct.js";
import productModel from "../model/product/product.js";
import unitModel from "../model/product/unit.js";
import studentModel from "../model/student/student.js";
import UserModel from "../model/user/user.js";

const dbInit = async () => {
  await UserModel.sync({
    alter: true,
    force: false,
  });
  await categoryModel.sync({
    alter: true,
    force: false,
  });
  await unitModel.sync({
    alter: true,
    force: false,
  });

  await productModel.sync({
    alter: true,
    force: false,
  });
  await categoryProductModel.sync({
    alter: true,
    force: false,
  });
  await studentModel.sync({
    alter: true,
    force: false,
  });
};

export default dbInit;
