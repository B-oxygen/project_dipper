const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql");
const dbconfig = require("./dbconfig.js");

// app.listen(8545, function () {
//   console.log("listening on 8080");
// });

app.listen(8545, function () {
  console.log("Connected 8545 port!");
});

module.exports = {
  host: "localhost",
  user: "id",
  password: "pw",
  database: "userInfo",
};

// 리액트와 nodejs 서버간 ajax 요청 (DB 데이터 주고 받을 때 필요)
app.use(express.json());
var cors = require("cors");
app.use(cors());

// 앱페이지
app.use(express.static(path.join(__dirname, "dipper_app/build")));
app.get("/", function (req, res) {
  // res.json({ name: "black shoes" });
  res.send(path.join(__dirname, "dipper_app/build/index.html"));
});

// 랜딩페이지
app.use(express.static("landing_page/build"));
app.get("/dipper", function (req, res) {
  res.sendFile(path.join(__dirname, "/landing_page/build/index.html"));
});

// 마이페이지
app.use(express.static("my_page/build"));
app.get("/my_page", function (req, res) {
  res.sendFile(path.join(__dirname, "/my_page/build/index.html"));
});
