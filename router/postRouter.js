const express = require("express");
const postController = require("../controller/postController");
const router = express.Router();

// post upload
router.post("/", postController.posting);

module.exports = router;