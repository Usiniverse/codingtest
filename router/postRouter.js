const express = require("express");
const postController = require("../controller/postController");
const router = express.Router();

// post upload
router.post("/post", postController.posting);

router.get("/", postController.getPost);

router.get("/:postId", postController.detailPost);

router.put("/:postId", postController.putPost);

router.delete("/:postId", postController.deletePost);

module.exports = router;