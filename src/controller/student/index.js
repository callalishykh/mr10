const StudentController = {
  create: (req, res) => {
    const { cnic } = req.params;
    if (!cnic) {
      res.status(400).json({
        message: "Please provide cnic",
      });
    }

    res.json({
      cnic,
      message: "Student create",
    });
  },
  getAll: (req, res) => {
    res.json({
      message: "All students",
    });
  },
};

export default StudentController;
