const express = require("express");

const router = express.Router();
const {
  createProject,
  getProjects,getMyProjects,deleteProject,getProjectById,updateProject,
} = require("../controllers/projectController");
const protect = require("../middleware/authMiddleware");
router.get("/my-projects", protect, getMyProjects);

router.get("/", getProjects);

router.get("/:id", getProjectById);

router.post("/", protect, createProject);

router.put("/:id", protect, updateProject);

router.delete("/:id", protect, deleteProject);
module.exports = router;