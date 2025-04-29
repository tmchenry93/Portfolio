const express = require('express');
const path = require("path");
const router = express.Router();
const fs = require("fs");

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'html', 'homepage.html'));
});

router.get('/about', function (req, res){
  res.sendFile(path.join(__dirname, 'html', 'about.html'));
});

router.get('/contact', function (req, res){
  res.sendFile(path.join(__dirname, 'html', 'contact.html'));
});

router.get('/gallery', function (req, res){
  res.sendFile(path.join(__dirname, 'html', 'gallery.html'));
});

function uuu(){
  var artForm = fs.readdir(path.join(__dirname, "art"));
  var artName = fs.stat(path.join(__dirname, "art"));
  console.log(artName);
  console.log(artForm);
};

const app = express();
app.use(express.static(__dirname + "/javascript/"));
app.use(express.static(__dirname + "/css/"));
app.use(express.static(__dirname + "/art/"));
app.use(express.static(__dirname + "/html/"));
app.use(express.static(__dirname + "/assets/"));
app.use(router);
app.use(uuu);
var port = process.env.PORT || 3000;

app.listen(port);