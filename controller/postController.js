const post = require("../models/posts");

// 게시글 작성
async function posting (req, res) {
    const { userId } = res.locals;
    const { nickname, title, content } = req.body;

    const posting = await posts.create({ userId, nickname, title, content })

    res.status(201).send({ posting })
}


// 게시글 수정
async function putPost (req, res) {
    const { userId } = res.locals;
    const { postId } = req.params;
    const { title, content } = req.body;

    const findUser = await post.findById( userId )

    if (!findUser.userId === userId) {
        await res.status(400).json({ errorMessage: "작성자가 아닙니다." })
    }

    const updatePost = await post.findByIdAndUpdate( postId, {
        $set: { 
            title: title,
            content: content 
        }
    });

    res.send({ updatePost });
}


// 게시글 삭제
async function deletePost (req, res) {
    const { userId } = res.locals;
    const { postId } = req.params;
    
    const findUser = await post.findById( userId );

    if (!findUser.userId === userId) {
        await res.status(400).json({ errorMessage: "작성자가 아닙니다." })
    }

    await post.findByIdAndDelete( postId );

    res.send({ msg: "게시글이 삭제되었습니다." })
}


// 게시글 목록 조회
async function getPost (req, res) {
    const getPostList = await post.findAll({})

    res.send({ getPostList });
}


// 게시글 상세 조회
async function detailPost (req, res) {
    const { postId } = req.params;

    const getDetailPost = await posts.findById( postId );
    console.log(getDetailPost);

    res.send({ getDetailPost });
}

module.exports = { 
    posting, 
    putPost, 
    deletePost, 
    getPost, 
    detailPost 
};