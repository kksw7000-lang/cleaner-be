import express from "express";

const router = express.Router();

router.post("/login", (req, res) => {
  res.json({
    message: "로그인이 완료되었습니다.",
  });
});

router.post("/logout", (req, res) => {
  res.json({
    message: "로그아웃 되었습니다.",
  });
});

router.get("/me", (req, res) => {
  res.json({
    message: "사용자 정보를 성공적으로 불러왔습니다.",
  });
});

router.patch("/me", (req, res) => {
  res.json({
    message: "회원 정보 수정이 완료되었습니다.",
  });
});

router.post("/refresh", (req, res) => {
  res.json({
    message: "토큰 재발급",
  });
});