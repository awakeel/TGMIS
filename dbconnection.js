var mysql = require("mysql");
var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "afgpdemo"
});
module.exports = connection;
