import Sequelize from "sequelize";

export const sequelize = new Sequelize("projectdb", "postgres", "cr7juanes", {
  host: "localhost",
  dialect: "postgres",
});
