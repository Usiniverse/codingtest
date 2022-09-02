const express = require("express");
const commentController = require("../controller/commentController");
const router = express.Router();

// 댓글
router.post("/comments/:postId", commentController.postComments);

router.delete("/comments/:postId/:commentId", commentController.deleteComments);

// 대댓글
router.post("/comments/:postId/:commentId", commentController.recomment);

module.exports = router;