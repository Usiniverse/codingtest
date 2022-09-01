const { posts, comments, users } = require("../models")

async function signUp (req, res) {
    const { userName, password } = req.body;

    const newUser = await users.create({
        userName, password
    });

    res.status(201).send("회원가입 되었습니다!")
}

async function signIn (req, res) {
    const loginUser = await users.findOne({
        where: { userName }
    });

    res.send({
        user: {
            userName: loginUser.userName
        }
    });
}

module.exports = { signUp, signIn }