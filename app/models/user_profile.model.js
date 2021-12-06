const user = require("./user.model");
module.exports = (sequelize, Sequelize) => {
  const user_profile = sequelize.define("user_profile", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    current_location: {
      type: Sequelize.STRING,
    },
    current_role: {
      type: Sequelize.STRING,
      defaultValue: null,
    },
    current_salary: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    total_work_experience_in_years: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    resume_link: {
      type: Sequelize.STRING,
      defaultValue: null,
    },
    linkedIn_link: {
      type: Sequelize.STRING,
      defaultValue: null,
    },
    github_link: {
      type: Sequelize.STRING,
      defaultValue: null,
    },
    // languages: { type: Sequelize.ARRAY(Sequelize.STRING), defaultValue: null },
  });
  return user_profile;
};
