const express = require("express");
const mongoose = require("mongoose");
const reqlogMiddleware = require("./middlewares/request-log-middleware");
const connectDB = require('./db/db');
const postRouter = require("./router/postRouter");
const userRouter = require("./router/userRouter");
// const commentRouter = require("./router/commentRouter");
const port = 8000;

const corsOption = {
  origin: ["*",],
  credentials: true,
};

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
  res.send("Hello World");
})
app.use("/posts", postRouter)
app.use("/users", userRouter)

// Middleware
app.use(reqlogMiddleware);
app.use(cors(corsOption));

// Port
const server = app.listen(port, () => {
    console.log(port,"번 포트에서 대기 중");
});