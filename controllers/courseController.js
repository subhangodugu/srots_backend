

const Course = require("../models/courseModel");

exports.createCourse = (req, res) => {
  const { college_id, course_code, course_name } = req.body;

  Course.createCourse(
    { college_id, course_code, course_name },
    (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: "Course created successfully" });
    }
  );
};

exports.getCoursesByCollege = (req, res) => {
  const { collegeId } = req.params;

  Course.getCoursesByCollege(collegeId, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

 