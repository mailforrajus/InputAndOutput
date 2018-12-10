var express = require("express");
var mongodb = require("mongodb");
var nareshIT = mongodb.MongoClient;
var router = express.Router();
router.post("/",(req,res)=>{
    var empId = req.body.empId;
    var obj = {"empId":empId};
    nareshIT.connect("mongodb://localhost:27017/angularCRUD",
                        (err,db)=>{
        db.collection("angularCRUD")
          .deleteOne(obj,(err,result)=>{
            if(err){
                res.send({"delete":"fail"});
            }else{
                res.send({"delete":"success"});
            }
        });
    });
});
module.exports = router;