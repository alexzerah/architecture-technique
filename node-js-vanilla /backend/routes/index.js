const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ msg: 'Hello world' });
});

router.get('/movie', function(req, res, next) {
  res.json({ data: {title: "Killers of the Flowers Moon", author: "Martin Scorsese"} });
});

router.get('/anime', function(req, res, next) {
  res.json({ title: '', author: "" });
});

router.get('/music', function(req, res, next) {
  res.json({ data: {title: "UTOPIA", author: "Travis Scott"} });
});

module.exports = router;
