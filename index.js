var sys = require("util");
console.log("Hello World");
const https = require('https');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');



// =========================================== HTML FILES ==================================

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/status_pool.html');
});

app.get('/Vault', function (req, res) {
  res.sendFile(__dirname + '/views/vault.html');
});

app.get('/Chart', function (req, res) {
  res.sendFile(__dirname + '/views/chart.html');
});



// =========================================== MODELS ==============================================


var trans = require('./models/transactions');


// =========================================== API END POINTS ============================================



app.get('/GetTransactions/:id', trans.totaltrans);


// ========================================== CONNECT TO LOCAL HOST ==================================



const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("Server connected to port" + " " + PORT);