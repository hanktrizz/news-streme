// Required Modules
var express = require("express");
var morgan = require("morgan");
var app = express();

var port = process.env.PORT || 3000;
const URL = "http://localhost:" + port + "/";

app.use(morgan("dev"));
app.use(express.static(__dirname));

app.get("/", function (req, res) {
    res.sendFile("./index.html"); //index.html file of angularjs application
});

// Start Server
app.listen(port, function () {
    console.log("Express server listening on port " + port);
    console.log("App running at : " + URL);
});