import "dotenv/config";

import express from "express";
import allRoutes from "./router/index.js";
import sequelize, { connectDB } from "./db/config.js";
import dbInit from "./db/init.js";
import Session from "express-session";
import SequelizeStore from "connect-session-sequelize";
import AuthenticateMiddleware from "./middleware/authenticate.js";
const PORT = process.env.PORT;

const app = express();
connectDB();
const mySequelizeStore = SequelizeStore(Session.Store);
const mySequelizeStore1 = new mySequelizeStore({
  db: sequelize,
});

app.use(
  Session({
    secret: "lanskjagsfjhgsdjhgf",
    Store: mySequelizeStore1,
    saveUninitialized: false,
    resave: true, // we support the touch method so per the express-session docs this should be set to false
    proxy: false, // if you do SSL outside of node.
  })
);
mySequelizeStore1.sync();
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
app.post("/", AuthenticateMiddleware, (req, res) => {
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
