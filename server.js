const express = require("express");
require("dotenv").config();
require("./db");

const app = express();
app.use(express.json());

const authRoutes = require("../srots-backend/Routes/auth");
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Node backend is running");
});

const protectedRoutes = require("./routes/protected");

app.use("/api", protectedRoutes);


const adminRoutes = require("./routes/admin.js");
const studentRoutes = require("./routes/student.js");

app.use("/api/admin", adminRoutes);
app.use("/api/student", studentRoutes);

 




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
