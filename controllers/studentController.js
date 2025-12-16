

const db = require("../db");
const Student = require("../models/studentModel");

/* Create Student */
exports.createStudent = (req, res) => {
  const data = req.body;

  Student.create(data, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Student created successfully" });
  });
};

/* Get Students By College */
exports.getByCollege = (req, res) => {
  const { collegeId } = req.params;

  Student.getByCollege(collegeId, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

/* Student Dashboard */
exports.dashboard = (req, res) => {
  res.json({
    message: "Welcome Student",
    student: req.user
  });
};

/* Get Available Jobs */
exports.getJobs = (req, res) => {
   const sql = `
    SELECT 
      id,
      job_title,
      job_type,
      work_mode,
      salary,
      deadline
    FROM jobs
  `;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    res.json({
      message: "Jobs fetched successfully",
      data: results
    });
  });
};

/* Apply for Job */
exports.applyJob = (req, res) => {
  const { job_id } = req.body;
  const student_id = req.user.id;

  const sql = `
    INSERT INTO applications (job_id, student_id)
    VALUES (?, ?)
  `;

  db.query(sql, [job_id, student_id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Applied successfully" });
  });
};
