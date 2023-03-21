const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const checkToken = (req, res) => {
  console.log("req.user", req.user);
  res.json(req.exp);
};

const dataController = {
  async index(req, res, next) {
    try {
      const users = await User.find({});
      console.log("all the users", users);
    } catch (error) {
      console.log("get users error", error);
      res.status(500).json({ error });
    }
  },
  async create(req, res, next) {
    try {
      const user = await User.create(req.body);
      const token = createJWT(user);

      res.locals.data.user = user;
      res.locals.data.token = token;
      next();
    } catch (error) {
      res.status(400).json(error);
    }
  },
  async login(req, res, next) {
    try {
      const user = await User.findOne({ email: req.body.email });
      console.log("User in controller", user);
      if (!user) throw new Error();
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) throw new Error();
      res.locals.data.user = user;
      res.locals.data.token = createJWT(user);
      next();
    } catch (error) {
      console.log("The log in error", error);
      res.status(400).json("Bad Cedentials");
    }
  },
};

const apiController = {
  index(req, res, next) {
    res.json(res.locals.data.users);
  },
  auth(req, res) {
    res.json(res.locals.data.token);
  },
};

module.exports = {
  checkToken,
  dataController,
  apiController,
};

/** Helper function */

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}
