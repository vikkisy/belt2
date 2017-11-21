var express = require("express");
var path = require("path");
var app = express();
var session = require('express-session');

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public/dist')));
app.use(session({ secret: 'secretKey' }));

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');

routes_setter(app);

app.listen(8000, function () {
    console.log("listening on port 8000");
})