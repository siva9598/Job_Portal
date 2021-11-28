module.exports = (sequelize, Sequelize) => {
  const appilcation = sequelize.define("application", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },

    status: {
      type: Sequelize.STRING,
    },
  });

  return appilcation;
};
