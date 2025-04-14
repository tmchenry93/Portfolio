const express = require('express');
const path = require("path");
const router = express.Router();

function injectScript(scriptPath) {
  const script = document.createElement('script');
  script.src = scriptPath;
  script.type = 'text/javascript';
  document.head.appendChild(script);
};

function injectStyleSheet(cssPath) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = cssPath;
  document.head.appendChild(link);
};

function filePath(folderName, page){
  return path.join(__dirname, folderName, page);
};

router.get('/', function (req, res) {
  res.sendFile(filePath('html', 'homepage.html'));
  injectScript(filePath("javascript", "global.js"));
  injectStyleSheet(filePath("css", "global.css"));
  injectScript(filePath("javascript", "homepage.js"));
  injectStyleSheet(filePath("css", "homepage.css"));
});

router.get('/about', function (req, res){
  res.sendFile(filePath('html', 'about.html'));
  injectScript(filePath("javascript", "global.js"));
  injectStyleSheet(filePath("css", "global.css"));
  injectScript(filePath("javascript", "about.js"));
  injectStyleSheet(filePath("css", "about.css"));
});

router.get('/contact', function (req, res){
  res.sendFile(filePath('html', 'contact.html'));
  injectScript(filePath("javascript", "global.js"));
  injectStyleSheet(filePath("css", "global.css"));
  injectScript(filePath("javascript", "contact.js"));
  injectStyleSheet(filePath("css", "contact.css"));
});

router.get('/gallery', function (req, res){
  res.sendFile(filePath('html', 'gallery.html'));
  injectScript(filePath("javascript", "global.js"));
  injectStyleSheet(filePath("css", "global.css"));
  injectScript(filePath("javascript", "gallery.js"));
  injectStyleSheet(filePath("css", "gallery.css"));
});

const app = express();
app.use(router);
var port = process.env.PORT || 3000;

app.listen(port);