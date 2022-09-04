const { comments, recomments } = require("../models");

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

    const findRecomment = await recomments.findAll({
        where: { commentId }
    });
    console.log(findRecomment);

    if (findRecomment) {
        await recomments.destroy({
            where: { commentId }
        });
    };

    await comments.destroy({ where: { commentId } });

    res.send({ msg: "댓글이 삭제되었습니다." });
}

// 7-1. 대댓글 작성하기
async function recomment (req, res) {
    const { userId } = res.locals;
    const { postId, commentId } = req.params;
    const { recommentContent } = req.body;

    const recomment = await recomments.create({
        userId, postId, commentId, recommentContent
    });

    res.status(201).send({ recomment });
}

module.exports = { postComments, deleteComments, recomment };


// 대댓 DB 새로 파기
// recommentId, commentId, recommentContent