module.exports = (sequelize, Sequelize) => {
    const Appilcation = sequelize.define("application", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
          },
        
      status: {
        type: Sequelize.STRING
      }
    });
  
    return Appilcation;
  };