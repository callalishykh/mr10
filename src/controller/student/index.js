import studentModel from "../../model/student/student.js";

const StudentController = {
  create: async (req, res) => {
    try {
      const { firstName, lastName, rollNo, phone } = req.body;

      // const student = new studentModel();

      // student.firstName = firstName;
      // student.lastName = lastName;
      // student.rollNo = rollNo;
      // student.phone = phone;
      // await student.save();
      const checkStudent = await studentModel.findOne({
        where: {
          rollNo,
        },
      });

      if (checkStudent) {
        return res.status(400).json({
          message: "Student with this roll no already exist",
        });
      }

      const student = await studentModel.create({
        firstName,
        lastName,
        rollNo,
        phone,
      });

      return res.status(201).json({
        message: "Student Created",
        student,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
  getAll: async (req, res) => {
    const students = await studentModel.findAll({
      where: {
        firstName: "Ali",
      },
    });
    res.json({
      students,
    });
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await studentModel.findOne({
        where: {
          id,
        },
      });
      if (!student) {
        return res.status(404).json({
          message: "Student not found",
        });
      }

      res.json({
        student,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await studentModel.findOne({
        where: {
          id,
        },
      });
      if (!student) {
        return res.status(404).json({
          message: "Student not found",
        });
      }

      await student.destroy();
      res.json({
        message: "Student deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { firstName, lastName, rollNo, phone } = req.body;

      const student = await studentModel.findOne({
        where: {
          id,
        },
      });
      if (!student) {
        return res.status(404).json({
          message: "Student not found",
        });
      }

      student.firstName = firstName;
      student.lastName = lastName;
      student.rollNo = rollNo;
      student.phone = phone;
      await student.save();

      res.json({
        message: "Student Updated",
        student,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Something bad happened",
      });
    }
  },
};

export default StudentController;
