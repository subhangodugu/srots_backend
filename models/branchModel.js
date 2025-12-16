

const db = require("../db");

exports.createBranch = (data, callback) => {
  const sql = `
    INSERT INTO branches (college_id, branch_code, branch_name)
    VALUES (?, ?, ?)
  `;
  db.query(sql, [
    data.college_id,
    data.branch_code,
    data.branch_name
  ], callback);
};

exports.getBranchesByCollege = (college_id, callback) => {
  const sql = "SELECT * FROM branches WHERE college_id = ?";
  db.query(sql, [college_id], callback);
};
