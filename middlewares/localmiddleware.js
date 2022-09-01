const users = require("../models/users");

async function localMiddleWare (req, res, next) {
    res.locals.users = users;
    next();
}

module.exports = localMiddleWare;