const express = require("express");
const cors = require("cors");
const authRoutes = require("./app/routes/auth.routes");
const jobRoutes = require("./app/routes/job.routes");
const userProfileRoutes = require("./app/routes/user_profile.routes");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
//app.use(express.json());
app.use(express.json());
app.use(cookieParser());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.use("/api", jobRoutes);
app.use("/api/profile", userProfileRoutes);
const db = require("./app/models");
// db.sequelize.sync({
//   force: true,
// });
try {
  db.sequelize.sync();
} catch (err) {
  throw err;
}

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

//test api
app.get("/testapi", (req, res) => {
  res.json({ message: "hello world" });
});
app.post("/testapi2", async (req, res) => {
  console.log(Object.getOwnPropertyNames(req.body));
  console.log(`body :${req.body}`);
  res.json({ message: "hello world" });
});

const path = require("path");
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
