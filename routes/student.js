

const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");

const studentController = require("../controllers/studentController");

router.get("/dashboard", auth, role(5), (req, res) => {
  res.json({ message: "Student dashboard access granted" });
});

// Admin creates student
router.post("/", auth, role(1), studentController.createStudent);

// Get students by college
router.get("/college/:collegeId", auth, studentController.getByCollege);

router.get("/dashboard", auth, role(5), studentController.dashboard);

// View Jobs
router.get("/jobs", auth, role(5), studentController.getJobs);

// Apply Job
router.post("/apply", auth, role(5), studentController.applyJob);


module.exports = router;
