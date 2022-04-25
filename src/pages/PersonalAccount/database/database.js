const Sequelize = require('sequelize');


const sequelize = new Sequelize("bremin_data","primary_user","user777",{
  host: "172.16.192.90",
  dialect: "mysql"});

module.exports = sequelize;