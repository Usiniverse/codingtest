const { comments } = require("../models")

// 5. 댓글을 등록합니다.
async function postComments (req, res) {
    const { postId } = req.params;
    const { userId, userName } = res.locals;
    const { commentContent } = req.body;

    const saveComment = await comments.create({ userId, postId, commentContent });

    res.status(201).send({ saveComment });
}

module.exports = { postComments };