


const db = require("../db");

exports.createCourse = (course, callback) => {
  const sql = `
    INSERT INTO courses (college_id, course_code, course_name)
    VALUES (?, ?, ?)
  `;
  db.query(
    sql,
    [course.college_id, course.course_code, course.course_name],
    callback
  );
};

exports.getCoursesByCollege = (college_id, callback) => {
  const sql = "SELECT * FROM courses WHERE college_id = ?";
  db.query(sql, [college_id], callback);
};

exports.getAllCourses = (callback) => {
  const sql = "SELECT * FROM courses";
  db.query(sql, callback);
};


exports.createCourse = (course, callback) => {
  const sql = `
    INSERT INTO courses (course_code, course_name)
    VALUES (?, ?)
  `;
  db.query(sql, [course.course_code, course.course_name], callback);
};
