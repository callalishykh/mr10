import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../../model/user/user.js";

const AuthController = {
  register: async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;

      const user = await UserModel.findOne({
        where: {
          email,
        },
      });

      if (user) {
        return res.status(400).json({
          message: `user with this ${email} already exist`,
        });
      }

      const hPassword = await hash(password, 10);
      console.log("THis is hPassword =====>", hPassword);
      await UserModel.create({
        firstName, // firstName:firstName
        lastName,
        password: hPassword,
        email,
      });

      return res.status(201).json({
        message: "User registered",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error,
        message: "Something bad happened",
      });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await UserModel.findOne({
        where: {
          email,
        },
      });

      if (!user) {
        return res.status(401).json({
          message: `Invalid credentials`,
        });
      }
      const comparePassword = await compare(password, user.password);
      if (!comparePassword) {
        return res.status(401).json({
          message: `Invalid credentials`,
        });
      }

      const data = {
        id: user.id,
        email: user.email,
        test: "test",
      };

      const token = jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: "14d",
      });

      return res.status(200).json({
        message: "User login",
        token,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error,
        message: "Something bad happened",
      });
    }
  },
};

export default AuthController;
