const express = require("express");
const router = express.Router();
const {
  dataController,
  apiController,
} = require("../../controllers/api/movieController");

/*
 *Routes
 */
//Index
router.get("/", dataController.index, apiController.index);
//watched Index
router.get("/watched", dataController.watchedIndex, apiController.index);
//Delete
router.delete("/:id", dataController.destroy, apiController.show);
//Update
router.put("/remove/:id", dataController.update, apiController.show);
//create
router.post("/", dataController.create, apiController.show);
//edit
router.put("/:id", dataController.edit, apiController.show);
//show
router.get("/:id", dataController.show, apiController.show);

module.exports = router;
