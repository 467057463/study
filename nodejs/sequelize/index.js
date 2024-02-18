const { Sequelize, DataTypes } = require("sequelize")


const sequelize = new Sequelize('learning_development', 'root', 'nandudu_', {
  host: 'localhost',
  dialect: 'mysql'
});

const Worker = sequelize.define('Worker', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },

  lastName: {
    type: DataTypes.STRING,
  }
})

console.log(Worker, sequelize.models.Worker)