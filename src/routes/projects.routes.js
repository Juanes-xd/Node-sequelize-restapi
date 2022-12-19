import { Router } from "express";
import {
  getProjects,
  createProject,
} from "../controllers/project.controller.js";
const router = Router();

router.get("/projects", getProjects);
router.post("/projects", createProject);
router.delete("/projects/:id");
router.put("/projects/:id");
router.get("/projects/:id");

export default router;
