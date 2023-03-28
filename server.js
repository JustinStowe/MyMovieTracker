/*
 * Dependencies
 */
require("dotenv").config();

const express = require("express");

const app = express();

const path = require("path");

const favicon = require("serve-favicon");

const logger = require("morgan");

const ensureLoggedIn = require("./config/ensureLoggedIn");

/*
 *Globals
 */
const PORT = process.env.PORT || 3001;

/*
 *Database
 */
require("./config/database");

/*
 *Middleware
 */

app.use(logger("dev"));

app.use(express.json());

app.use(favicon(path.join(__dirname, "build", "favicon.ico")));

app.use(express.static(path.join(__dirname, "build")));

app.use((req, res, next) => {
  res.locals.data = {};
  next();
});

app.use(require("./config/checkToken"));
/*
 * Routes
 */

// Put API routes here, before the "catch all" route
app.use("/api/users", require("./routes/api/users"));
// Protect the API routes below from anonymous users

app.use("/api/movies", ensureLoggedIn, require("./routes/api/movies"));
app.use("/api/comments", ensureLoggedIn, require("./routes/api/comment"));

app.get("/api", (req, res) => {
  res.json({ message: "The API is alive!!!" });
});
//Authentication required routes
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
