const { Sequelize, DataTypes, Model } = require("sequelize")


const sequelize = new Sequelize('sequelize_development', 'root', 'nandudu_', {
  host: 'localhost',
  dialect: 'mysql'
});

// 方法一：使用define
const User = sequelize.define('user', {
  firstName: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  lastName: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

// 方法二：扩展
// class User extends Model {}

// User.init({
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },

//   lastName: {
//     type: DataTypes.STRING,
//   }
// }, { sequelize });

( async function (){
  await sequelize.sync()
  const user = await User.create({
    firstName: 'm',
    lastName: 'm'
  })

  const users = await User.findAll({
    attributes: ['firstName', ['lastName', 'l_n']],
    where: {
      firstName: 'cw'
    }
  })
  console.log(users)
}())


