const db = require("../models");
const Recuiter = db.recuiter;
verifyRecuiter = (req, res, next) => {
  const user_id = req.userId;
  Recuiter.findOne({
    where: {
      userID: user_id,
      is_verified: true,
    },
  })
    .then((recuiter) => {
      req.recuiterId = recuiter.id;
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
  next();
};

module.exports = verifyRecuiter;
