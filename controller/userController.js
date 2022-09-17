const user = require("../models/users")

async function signUp (req, res) {
    const { nickname, password } = req.body;

    const findUser = await user.findOne({ nickname });

    if (findUser.nickname === nickname) {
        return res.status(400).send({ errorMessage: "이미 가입한 회원입니다." })
    }

    await user.create({ nickname, password });

    res.status(201).send("회원가입 되었습니다!")
}

async function signIn (req, res) {
    const { nickname, password } = req.body;

    const loginUser = await user.findOne({ nickname });

    if (nickname !== loginUser.nickname) {
        return res.status(400),send({ errorMessage: "아이디가 일치하지 않습니다." })
    }

    if (password !== loginUser.password) {
        return res.status(400),send({ errorMessage: "비밀번호가 일치하지 않습니다." })
    }

    res.send({ msg: "로그인" });
}

module.exports = { signUp, signIn }