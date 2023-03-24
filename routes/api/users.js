const express = require("express");
const router = express.Router();

const {
  checkToken,
  dataController,
  apiController,
} = require("../../controllers/api/userController");
const ensureLoggedIn = require("../../config/ensureLoggedIn");
//Get all users
router.get("/", dataController.index, apiController.index);
//get all user's friends
router.get("/friends", dataController.friendIndex, apiController.index);
//Add a friend
router.put("/friends", dataController.addFriend);
// Post /api/users/login
router.post("/login", dataController.login, apiController.auth);

// Get /api/users/check-token
router.get("/check-token", ensureLoggedIn, checkToken);

// POST /api/users
router.post("/", dataController.create, apiController.auth);

module.exports = router;
