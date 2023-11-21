import { Router } from "express";
import StudentController from "../../controller/student/index.js";

const studentRouter = Router();
studentRouter.post("/", StudentController.create);
studentRouter.get("/", StudentController.getAll);
studentRouter.get("/:id", StudentController.getSingle);
studentRouter.delete("/:id", StudentController.delete);
studentRouter.put("/:id", StudentController.update);

// studentRouter.get("/all", StudentController.create);
// studentRouter.get("/single", StudentController.create);
// studentRouter.get("/a", StudentController.create);
// studentRouter.get("/b", StudentController.create);

export default studentRouter;
