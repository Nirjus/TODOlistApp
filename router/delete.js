const express = require("express");
const router = express.Router();

const deleteController = require("../controllers/delete_controller");

router.get("/delete_task",deleteController.del);

module.exports = router;