

const db = require("../db");

exports.createUser = (user, callback) => {
  const sql = `
    INSERT INTO users (full_name, email, password_hash, role_id)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [user.full_name, user.email, user.password_hash, user.role_id],
    callback
  );
};

exports.findByEmail = (email, callback) => {
  const sql = `
    SELECT id, role_id, email, password_hash
    FROM users
    WHERE email = ?
    LIMIT 1
  `;

  db.query(sql, [email], callback);
};
