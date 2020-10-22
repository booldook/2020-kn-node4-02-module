const express = require('express');
const router = express.Router();

router.get('/join', (req, res, next) => {
  res.send('<h1>회원가입</h1>');
});

router.get(['/', '/login'], (req, res, next) => {
  res.send('<h1>회원 로그인</h1>');
});

module.exports = router;