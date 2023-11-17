import { Router } from "express";
import StudentController from "../../controller/student/index.js";

const studentRouter = Router();
studentRouter.get("/:cnic", StudentController.create);

// studentRouter.get("/all", StudentController.create);
// studentRouter.get("/single", StudentController.create);
// studentRouter.get("/a", StudentController.create);
// studentRouter.get("/b", StudentController.create);

export default studentRouter;
