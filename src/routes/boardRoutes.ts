import express from "express";

const router = express.Router();

router.get("/boards", (req, res) => {
  res.json({
    message: "게시글 목록 조회 성공",
  });
});

router.get("/boards/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: "게시글 상세 조회 성공",
    id,
  });
});
