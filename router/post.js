const express = require("express");

const router = express.Router();

const postController = require("../controllers/post_controller")

router.post("/create-tasks",postController.post);

module.exports=router;

