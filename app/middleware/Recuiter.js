const db = require("../models");
const Recuiter = db.recuiter;
verifyRecuiter = async (req, res, next) => {
  const user_id = req.userId;
  console.log("user id: " + user_id);
  await Recuiter.findOne({
    where: {
      userId: user_id,
      is_verified: 1,
    },
  })
    .then((recuiter) => {
      console.log("got the recuiter");
      req.recuiterId = recuiter.id;
    })
    .catch((err) => {
      console.log("got the recuiter");
      res.status(400).send(err.message);
    });
  next();
};

// const checkRecuiter = {
//   verifyRecuiter: verifyRecuiter,
// };

// module.exports = checkRecuiter;
module.exports = verifyRecuiter;
