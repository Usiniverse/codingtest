const { comments } = require("../models")

// 5. 댓글을 등록합니다.
async function postComments (req, res) {
    const { postId } = req.params;
    const { userId, userName } = res.locals;
    const { commentContent } = req.body;

    const saveComment = await comments.create({ 
        userId: userId, 
        postId: postId, 
        commentContent: commentContent
    });

    res.status(201).send({ saveComment });
}


// 6. 댓글을 삭제합니다.
async function deleteComments (req, res) {
    const { commentId } = req.params;

    await comments.destroy({ where: { commentId } });

    res.send({ msg: "댓글이 삭제되었습니다." });
}

module.exports = { postComments, deleteComments };


// 대댓 DB 새로 파기
// recommentId, commentId, recommentContent