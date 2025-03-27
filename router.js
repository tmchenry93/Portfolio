const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.sendFile("html/index.html");
});

router.get('/about', function (req, res){
  res.sendFile("html/about.html");
});

router.get('/contact', function (req, res){
  res.sendFile("html/contact.html");
});

router.get('/gallery', function (req, res){
  res.sendFile("html/gallery.html");
});

const app = express();
app.use('/', router);
