import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "코드잇 express 실습 서버에 오신 것을 환영합니다.",
  });
});

app.get("/health", (req, res) => {
  res.send("Health Check Success");
});

app.listen(3000, () => {
  console.log("서버가 3000번 포트에서 실행 중입니다.");
});
