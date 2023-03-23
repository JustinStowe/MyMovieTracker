const express = require("express");
const router = express.Router();

const {
  dataController,
  apiController,
} = require("../../controllers/api/commentController");

/*
 *Routes
 */

//Index
router.get("/", dataController.index, apiController.index);
//Delete
router.delete("/:id", dataController.destroy, apiController.show);
//update
router.put("/update/:id", dataController.update, apiController.show);
//create
router.post("/", dataController.create, apiController.show);
//edit
//show
router.get("/:id", dataController.show, apiController.show);
//

module.exports = router;
