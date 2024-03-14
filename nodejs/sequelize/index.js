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

const Firend = sequelize.define('firend', {
  work: {
    type: DataTypes.TEXT,
  }
})

User.belongsToMany(Firend, { through: 'userFirends'})
Firend.belongsToMany(User, { through: 'userFirends'});

( async function (){
  await sequelize.sync()

  // // 添加
  // const user = await User.create({
  //   firstName: 'm',
  //   lastName: 'm'
  // })

  // // 更新
  // await User.update({firstName: 'cw'}, {
  //   where: {
  //     id: 1
  //   }
  // })

  // const users = await User.findAll({
  //   attributes: ['firstName', ['lastName', 'l_n'], 'id'],
  //   where: {
  //     firstName: 'm'
  //   },
  //   order: [
  //     ["id", "DESC"]
  //   ],
  //   // group: "firstName"
  // })
  // console.log(users)

  const firend = await Firend.create({
    work: 'proger',
    userId: 1
  })
  const user = await User.findByPk(1)
  await user.addFirend(firend)
  const userF = await User.findByPk(1, {
    include: Firend
  })
  console.log(userF)
  // const f = await user.getFirend()
  // console.log(f)
}())


