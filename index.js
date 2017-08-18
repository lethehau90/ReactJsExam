/**
 * Created by Hau Le on 5/22/17.
 */

var express = require('express')
var app = express();
var morgan = require("morgan");

app.use( express.static(__dirname + "/public"))

app.use(morgan("dev"))
app.set("view engine", "ejs")
app.set("views", "./views")

var server = require('http').Server(app)

//Settings
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.render('trangchu')
})

server.listen(port, function () {
    console.log("Server is listening on port: " + port);
});