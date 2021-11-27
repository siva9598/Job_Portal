module.exports = (sequelize, Sequelize) => {
    const Job = sequelize.define("job", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
          },
        status: {
        type: Sequelize.STRING
      },
      location :{
        type : Sequelize.STRING
      },
      position :{
        type : Sequelize.STRING
      },
      requirements: {
        type: Sequelize.STRING
      },
      no_of_applicants: {
        type: Sequelize.INTEGER
      },
    });
  
    return Job;
  };