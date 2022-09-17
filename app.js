const express = require("express");
const mongoose = require("mongoose");
const reqlogMiddleware = require("./middlewares/request-log-middleware");
const connectDB = require('./db/db');
const path = require('path');
// const postRouter = require("./router/postRouter");
// const userRouter = require("./router/userRouter");
// const commentRouter = require("./router/commentRouter");
const port = 8000;

// ============================
// DB 연결 - log
connectDB();

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

// Server application
const app = express()

// Body parser
app.use(express.json());

// Router
app.get('/', (req, res) => {
  res.send("ㅎㅇ");
})
// app.use("/posts", postRouter, commentRouter)
// app.use("/users", userRouter)

// Middleware
app.use(reqlogMiddleware);

// Port
const server = app.listen(port, () => {
    console.log(port,"번 포트에서 대기 중");
});