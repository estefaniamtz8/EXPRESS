const express = require("express");
const path = require("path");
const app = express();


app.get("/", (req, res) => {
    //res.send("holiii");//
    res.sendFile(path.join(__dirname + "/index.html"));
});


app.listen(8000, () => {

console.log("server runing on port", 8000);

});