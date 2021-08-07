const express = require("express");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

// Get requests
app.get("/", function (req, res) {
    res.render("home");
});


// ..server port
app.listen(process.env.PORT || 3000, function () {
    console.log("server started on port");
});