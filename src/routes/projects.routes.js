import { Router } from "express";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProject,
  getProjectTasks,
} from "../controllers/project.controller.js";
const router = Router();

router.get("/projects", getProjects);
router.post("/projects", createProject);
router.delete("/projects/:id", deleteProject);
router.put("/projects/:id", updateProject);
router.get("/projects/:id", getProject);
router.get("/projects/:id/task", getProjectTasks);
export default router;
