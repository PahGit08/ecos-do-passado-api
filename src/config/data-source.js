const { DataSource } = require("typeorm");
const user = require("../entity/user");

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/database/database.sqlite",
  synchronize: true,
  entities: [user],
});

module.exports = { AppDataSource };