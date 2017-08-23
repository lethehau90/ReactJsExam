/**
 * Created by Hau Le on 5/22/17.
 */

var express = require('express')
var app = express();
var morgan = require("morgan");
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({extended : false});

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

var mang = ["Android", "Php", "NodeJs", "React"]

app.post("/getNotes", function(req, res){
    res.send(mang);
})

app.post("/addNote", parser , function(req, res){
    mang.push(req.body.note);
    res.send(mang);
})

app.post("/delete", parser , function(req, res){
    var id = req.body.idXoa;
    mang.splice(id,1);
    res.send(mang);
})

app.post("/update", parser , function(req, res){
    var id = req.body.idSua;
    mang[id] = req.body.noiDung;
    res.send(mang);
})


server.listen(port, function () {
    console.log("Server is listening on port: " + port);
});