const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');

var dir = path.dirname(__dirname+"/simple");
var route = require('./routes/index');

app.engine('.ejs', ejs.__express);
app.set('views',dir+"/views");

app.get('/', route.anasayfa);

app.get('/ek-sayfa', route.eksayfa);


app.listen(5000);