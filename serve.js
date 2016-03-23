var express = require('express');
var open = require('open');

var app = express();

app.use(express.static(process.argv[2]));
app.listen(80);
