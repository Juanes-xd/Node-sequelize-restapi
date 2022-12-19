import { sequelize } from "../database/databse.js";
import { DataTypes } from "sequelize";
import { Task } from "./Task.js";

export const Project = sequelize.define("projects", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  priority: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
});

Project.hasMany(Task, {
  foreignKey: "projectId",
  sourcekey: "id",
});

Task.belongsTo(Project, {
  foreignKey: "projectId",
  targetId: "id",
});
