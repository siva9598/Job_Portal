const user = require('./user.model');
module.exports = (sequelize, Sequelize) => {
    const recuiter = sequelize.define("recuiter", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
          },
        
      company_name: {
        type: Sequelize.STRING
      },
    //   userId: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //         model: user,
    //         key: "userId"
    //     }
    // }
    });
    //recuiter.belongsTo(user, {as: 'User', foreignKey: 'userId'});
   // Recuiter.hasOne(User);

//    recuiter.associate = function(models) {
//     recuiter.belongsTo(models.user,{as: 'user', foreignKey: 'userId'})
//     }

    // Recuiter.associate = (models) =>{
    //     Recuiter.belongsTo(models.User, {
    //         as: 'user',
    //         foreignKey: 'userId'
    //       })
    // }
    return recuiter;
  };
  