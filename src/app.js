import express from "express";
import allRoutes from "./router/index.js";
import { connectDB } from "./db/config.js";
import dbInit from "./db/init.js";
const PORT = 3300;
const app = express();
connectDB();

dbInit()
  .then(() => console.log("DB synced"))
  .catch((err) => console.log("Db not synced", err));
const students = [
  {
    name: "Ali",
    marks: 34,
  },
  {
    name: "Ahmad",
    marks: 80,
  },

  {
    name: "azhar",
    marks: 50,
  },
  {
    name: "azhar1",
    marks: 51,
  },
];
app.use(express.json());
app.use("/", allRoutes);
app.post("/", (req, res) => {
  return res.json({
    message: "Hello world1",
  });
});

app.post("/student", (req, res) => {
  console.log(req.body, "This is body");

  return res.json({
    message: "Hello world1",
  });
});
app.post("/filter-student", (req, res) => {
  const marks = req.body.marks;
  const fStudents = students.filter((ele) => ele.marks > marks);
  return res.json({
    fStudents,
  });
});
app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server started at http://localhost:${PORT}`);
  } else {
    console.log("Something bad happens while starting server");
  }
});
