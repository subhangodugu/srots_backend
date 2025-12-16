

const db = require("../db");

exports.create = (data, callback) => {
  const sql = `
    INSERT INTO students 
    (college_id, course_id, branch_id, roll_number, full_name, email, phone)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [
    data.college_id,
    data.course_id,
    data.branch_id,
    data.roll_number,
    data.email,
    data.phone
  ], callback);
};

exports.getByCollege = (collegeId, callback) => {
  db.query(
    "SELECT * FROM students WHERE college_id = ?",
    [collegeId],
    callback
  );
};
