var express= require("express");
var bodyparser=require("body-parser");
var cors=require("cors");
var app=express();
app.use(cors());
app.use(bodyparser.json());

var fetch=require("./fetch/fetch");
var insert= require("./insert/insert");
var update= require("./update/update");
var deleteAPI = require("./delete/delete");
app.use("/insert",insert)
app.use("/fetch",fetch);
app.use("/update",update);
app.use("/delete",deleteAPI);
app.listen(8081);
console.log("server started");

