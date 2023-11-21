import studentModel from "../model/student/student.js";

const dbInit = async () => {
  await studentModel.sync({
    alter: true,
    force: false,
  });
};

export default dbInit;
