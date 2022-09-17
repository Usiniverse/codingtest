const user = require("../models/users")

async function signUp (req, res) {
    const { userId, nickname, password } = req.body;

    await user.create({ userId, nickname, password });

    res.status(201).send("회원가입 되었습니다!")
}

async function signIn (req, res) {
    const { userId, password } = req.body;

    const loginUser = await user.findById( userId );

    if (userId !== loginUser.userId) {
        return res.status(400),send({ errorMessage: "아이디가 일치하지 않습니다." })
    }

    if (password !== loginUser.password) {
        return res.status(400),send({ errorMessage: "비밀번호가 일치하지 않습니다." })
    }

    res.send({ msg: "로그인" });
}

module.exports = { signUp, signIn }