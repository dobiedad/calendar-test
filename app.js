var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('listening on port 3000!');
});

app.use(express.static(path.join(__dirname)));

module.exports = app;
