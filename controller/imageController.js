const { images } = require("../models")

async function uploadImages (res, req) {
    const image = req.files;

    const imagesMappingKEY = image.map(postImageKEY => postImageKEY.key)
    const imagesMappingURL = image.map(postImageKEY => postImageKEY.location)

    

    const saveImages = await images.create({

    })

    // 이미지 업로드
    // S3, MySQL
}