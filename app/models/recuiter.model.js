const user = require("./user.model");
module.exports = (sequelize, Sequelize) => {
  const recuiter = sequelize.define("recuiter", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    company_name: {
      type: Sequelize.STRING,
    },
    company_email: {
      type: Sequelize.STRING,
    },
    is_verified: {
      type: Sequelize.BOOLEAN,
      default: false,
    },
  });
  return recuiter;
};
