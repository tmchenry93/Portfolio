const express = require('express');
const path = require("path");
const router = express.Router();

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

const app = express();
app.use(express.static(__dirname + "/javascript/"));
app.use(express.static(__dirname + "/css/"));
app.use(express.static(__dirname + "/art/"));
app.use(express.static(__dirname + "/html/"));
app.use(router);
var port = process.env.PORT || 3000;

app.listen(port);