




const db = require("../db");

exports.getAllColleges = (req, res) => {
  const sql = "SELECT * FROM colleges";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({
      message: "Colleges fetched successfully",
      data: results
    });
  });
};

 

exports.createCollege = (req, res) => {
  const { college_code, college_name } = req.body;

  if (!college_code || !college_name) {
    return res.status(400).json({ message: "All fields required" });
  }

  const sql = `
    INSERT INTO colleges (college_code, college_name, is_active)
    VALUES (?, ?, 1)
  `;

  db.query(sql, [college_code, college_name], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({ message: "College created successfully" });
  });
};


const Branch = require("../models/branchModel");

exports.createBranch = (req, res) => {
  Branch.createBranch(req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Branch created successfully" });
  });
};

exports.getBranches = (req, res) => {
  const { college_id } = req.params;

  Branch.getBranchesByCollege(college_id, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Branches fetched", data });
  });
};

const Course = require("../models/courseModel");

exports.getAllCourses = (req, res) => {
  Course.getAllCourses((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      message: "Courses fetched successfully",
      data: results,
    });
  });
};


exports.createCourse = (req, res) => {
  const { course_code, course_name } = req.body;

  if (!course_code || !course_name) {
    return res.status(400).json({ message: "All fields required" });
  }

  Course.createCourse({ course_code, course_name }, (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json({ message: "Course created successfully" });
  });
};

exports.getBranchesByCourse = (req, res) => {
  const courseId = req.params.course_id;

  const sql = "SELECT * FROM branches WHERE course_id = ?";
  db.query(sql, [courseId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json(results);
  });
};

