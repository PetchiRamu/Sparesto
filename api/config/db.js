const { Sequelize } = require("sequelize");
const mysql2 = require("mysql2"); // Required to prevent Next.js bundler errors

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",          // <-- Changed from "postgres" to "mysql"
    dialectModule: mysql2,     // <-- Added this to help Next.js find the driver
    logging: false
  }
);

module.exports = sequelize;
