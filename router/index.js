const express = require("express");

const router = express.Router();
console.log("Router is loaded");

const homeController = require("../controllers/home_controller");

router.get("/",homeController.home);
router.use("/",require("./user"));
router.use("/",require("./post"));
router.use("/",require("./delete"));
module.exports = router;