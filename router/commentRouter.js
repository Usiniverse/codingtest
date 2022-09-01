const express = require("express");
const commentController = require("../controller/commentController");
const router = express.Router();

router.post("/comments/:postId", commentController.postComments);

router.delete("/comments/:postId/:commentId", commentController.deleteComments);

module.exports = router;