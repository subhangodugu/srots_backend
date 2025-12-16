





const express = require("express");
const router = express.Router();
const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");
const adminController = require("../controllers/adminController");

router.get("/dashboard", auth, role(1), (req, res) => {
  res.json({ message: "Admin dashboard access granted" });
});

router.get("/colleges", auth, role(1), adminController.getAllColleges);

router.post("/college", auth, role(1), adminController.createCollege);

router.post("/branch", auth, role(1), adminController.createBranch);

router.get("/branch/:college_id", auth, role(1), adminController.getBranches);

const courseController = require("../controllers/courseController");

/* Create course */
router.post("/course", auth, role(1), courseController.createCourse);

/* View courses by college */
router.get(
  "/college/:collegeId/courses",
  auth,
  role(1),
  courseController.getCoursesByCollege
);

router.get("/courses", auth, role(1), adminController.getAllCourses);

router.post("/course", auth, role(1), adminController.createCourse);

router.get("/branches/:course_id", auth, role(1), adminController.getBranchesByCourse);

module.exports = router;
