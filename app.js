const express = require("express");
const mysql = require("mysql");
const reqlogMiddleware = require("./middlewares/request-log-middleware");
const postRouter = require("./router/postRouter");
const userRouter = require("./router/userRouter");
const commentRouter = require("./router/commentRouter");
const port = 8000;

//MySQL
const db = require("./models");
db.sequelize
  .sync()
  .then(() => {
     console.log("MySQL DB 연결 성공");
  })
  .catch((error) => {
    console.error(error);
  });

// Server application
const app = express()

// Body parser
app.use(express.json());

// Router
app.get('/', (req, res) => {
  res.status(200).render("index");
})
app.use("/posts", postRouter, commentRouter)
app.use("/users", userRouter)

// Middleware
app.use(reqlogMiddleware);

// Port
const server = app.listen(port, () => {
    console.log(port,"번 포트에서 대기 중");
});