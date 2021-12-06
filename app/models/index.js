const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.recuiter = require("../models/recuiter.model.js")(sequelize, Sequelize);
db.job = require("../models/job.model.js")(sequelize, Sequelize);
db.user_profile = require("../models/user_profile.model.js")(
  sequelize,
  Sequelize
);
db.application = require("../models/application.model.js")(
  sequelize,
  Sequelize
);

db.user.hasOne(db.recuiter);
db.recuiter.belongsTo(db.user);

db.user.hasMany(db.application);
db.application.belongsTo(db.user);

db.application.belongsTo(db.job);
db.job.hasMany(db.application);

db.job.belongsTo(db.recuiter);
db.recuiter.hasMany(db.job);

db.user.hasOne(db.user_profile);
db.user_profile.belongsTo(db.user);

module.exports = db;
