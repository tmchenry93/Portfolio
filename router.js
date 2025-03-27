const express = require('express');
const path = require("path");
const router = express.Router();

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/html', 'homepage.html'));
  //res.sendFile("html/index.html");
});

router.get('/about', function (req, res){
  res.sendFile(path.join(__dirname, '/html', 'about.html'));
  //res.sendFile("html/about.html");
});

router.get('/contact', function (req, res){
  res.sendFile(path.join(__dirname, '/html', 'contact.html'));
  //res.sendFile("html/contact.html");
});

router.get('/gallery', function (req, res){
  res.sendFile(path.join(__dirname, '/html', 'gallery.html'));
  //res.sendFile("html/gallery.html");
});

const app = express();
app.use('/', router);
