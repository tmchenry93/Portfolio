const express = require('express');
//const path = require("path");
const router = express.Router();

router.get('/', function (req, res) {
  //res.sendFile(path.join(__dirname, 'html', 'homepage.html'));
  res.send("this is the homepage");
});

router.get('/about', function (req, res){
  //res.sendFile(path.join(__dirname, 'html', 'about.html'));
  res.send("this is the about page");
});

router.get('/contact', function (req, res){
  //res.sendFile(path.join(__dirname, 'html', 'contact.html'));
  res.send("this is the contact page");
});

router.get('/gallery', function (req, res){
  //res.sendFile(path.join(__dirname, 'html', 'gallery.html'));
  res.send("this is the gallery page");
});

const app = express();
app.use(router);
