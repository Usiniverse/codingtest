const { posts, comments, users } = require("../models")

async function posting (req, res) {
    const { postTitle, postContent } = req.body;

    const savePosting = await posts.create({
        postTitle, postContent
    })
    // const saveUser = await users.create({
    //     userName
    // });

    res.status(201).send("게시글이 저장되었습니다!")
}

module.exports = { posting };