import { sequelize } from "../database/databse.js";
import { DataTypes } from "sequelize";

export const Task = sequelize.define("task", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
