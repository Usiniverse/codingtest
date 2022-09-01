const express = require("express")
const mysql = require("mysql");
const reqlogMiddleware = require("./middlewares/request-log-middleware");
const postRouter = require("./router/postRouter")
const userRouter = require("./router/userRouter")
const port = 8000;

//MySql
const db = require("./models");
db.sequelize
  .sync()
  .then(() => {
     console.log("MySQL DB 연결 성공");
  })
  .catch((error) => {
    console.error(error);
  });

// server application
const app = express()

// body parser
app.use(express.json());

// router
app.get('/', (req, res) => {
  res.status(200).render("index");
})
app.use("/posts", postRouter)
app.use("/users", userRouter)

// middleware
app.use(reqlogMiddleware);

// port
const server = app.listen(port, () => {
    console.log(port,"번 포트에서 대기 중");
});