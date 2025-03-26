const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send(./html/index.html);
});

router.get('/about', function (req, res){
  res.send(./html/about.html);
});

router.get('/contact', function (req, res){
  res.send(./html/contact.html);
});

router.get('/gallery', function (req, res){
  res.send(./html/gallery.html);
});

module.exports = router;