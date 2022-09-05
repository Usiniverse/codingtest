const { posts, comments, recomments } = require("../models");

// 1. 게시글을 등록합니다.
async function posting (req, res) {
    const { userId } = res.locals;
    const { postTitle, postContent } = req.body;

    const posting = await posts.create({ postTitle, postContent, userId })

    res.status(201).send({ posting })
}


// 2. 게시글을 수정합니다.
async function putPost (req, res) {
    const { postId } = req.params;
    const { postTitle, postContent } = req.body;

    const updatePost = await posts.update({
        postTitle: postTitle,
        postContent: postContent,
    }, {
        where: { postId: postId }
    });

    res.send({ updatePost });
}


// 3. 게시글을 삭제합니다.
async function deletePost (req, res) {
    const { postId } = req.params;

    await recomments.destroy({ where: { postId: postId } });
    await comments.destroy({ where: { postId: postId } });
    await posts.destroy({ where: { postId: postId } });

    res.send({ msg: "게시글이 삭제되었습니다." })
}

// 4-1. 게시글 목록을 가져옵니다.
async function getPost (req, res) {
    const getPostList = await posts.findAll({
        order: [[ "createdAt", "DESC" ]],
    })

    res.send({ getPostList });
}

// 4-2. 게시글 검색 기능 구현


// 7. 게시글 상세 페이지를 가져옵니다.
async function detailPost (req, res) {
    const { postId } = req.params;

    const getDetailPost = await posts.findAll({
        where: { postId: postId },
        order: [[ "createdAt", "DESC" ]],
        include: [
            {
                model: comments,
                required: false,
                order: [[ "createdAt", "DESC" ]],
                include: [{
                    model: recomments,
                    order: [[ "createdAt", "DESC" ]],
                }]
            },
        ]
    });

    res.send({ getDetailPost });
}

module.exports = { 
    posting, 
    putPost, 
    deletePost, 
    getPost, 
    detailPost 
};