import express from "express";
import projectRoutes from "./routes/projects.routes.js";
import taskRoutes from "./routes/task.routes.js";
const app = express();

app.use(express.json());
app.use(projectRoutes);
app.use(taskRoutes);
export default app;
