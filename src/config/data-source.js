const { DataSource } = require("typeorm");
const user = require("../entity/user");
const reports = require("../entity/reports");

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/database/database.sqlite",
  synchronize: true,
  entities: [user, reports],
});

module.exports = { AppDataSource };