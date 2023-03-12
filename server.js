/*
 * Dependencies
 */
require("dotenv").config();

const express = require("express");

const app = express();

const path = require("path");

const favicon = require("serve-favicon");

const logger = require("morgan");
// const cors = require("cors")

/*
 *Globals
 */
const PORT = process.env.PORT ?? 3001;
// const whitelist = ["http://localhost:3000", "http://localhost:3001"];
// const corsOptions = {
//   orgin: function (orgin, callback) {
//     if (whitelist.indexOf(orgin) != -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };
/*
 *Database
 */
require("./config/database");

/*
 *Middleware
 */

app.use(logger("dev"));

// app.use(cors(corsOptions))

app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));

app.use(express.static(path.join(__dirname, "build")));

app.use((req, res, next) => {
  res.locals.data = {};
  next();
});
/*
 * Routes
 */

// Put API routes here, before the "catch all" route

app.get("/api", (req, res) => {
  res.json({ message: "The API is alive!!!" });
});

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

/*
 * Listener
 */
app.listen(PORT, function () {
  console.log(`Express app running on port ${PORT}`);
});
