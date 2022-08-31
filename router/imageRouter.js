const express = require("express");
const imageController = require("../controller/imageController");
const upload = require("../middlewares/S3-middleware")
const router = express.Router;

// image upload
router.post('/', upload.array('prac', 8), imageController.uploadImages)