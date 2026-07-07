import express from "express";

const router = express.Router();

router.get("/services", (req, res) => {
  res.json({
    message: "서비스 목록 조회 성공",
  });
});

router.get("/services/:category", (req, res) => {
  const { category } = req.params;
  res.json({
    message: "서비스 목록 조회 성공",
    category,
  });
});
