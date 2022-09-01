const { users } = require("../models")

async function signUp (req, res) {
    const { userName, password } = req.body;

    const newUser = await users.create({
        userName, password
    });

    res.status(201).send("회원가입 되었습니다!")
}

async function signIn (req, res) {
    const { userName, password } = req.body;

    const loginUser = await users.findOne({
        where: { userName }
    });

    if (userName !== loginUser.userName) {
        return res.status(400),send({ errorMessage: "아이디가 일치하지 않습니다." })
    }

    if (password !== loginUser.password) {
        return res.status(400),send({ errorMessage: "비밀번호가 일치하지 않습니다." })
    }

    res.send({ msg: "로그인" });
}

module.exports = { signUp, signIn }