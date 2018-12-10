var express=require("express");
var mongoDB= require("mongodb");
var angularClient=mongoDB.MongoClient;
var router=express.Router();
router.post("/",(req,res)=>{
        var empId=req.body.empId;
        var empName=req.body.empName;
        var empSalary=req.body.empSalary;

    var obj_one={"empId":empId};
        var obj_two={$set:{"empName":empName,"empSalary":empSalary}};
        angularClient.connect("mongodb://localhost:27017/angularCRUD",(err, db)=>{
            db.collection("employees").updateOne(obj_one,obj_two,(err, result)=>{
                    if(err){
                        res.send({"insert":"fail"});
                    }else{
                        res.send({"insert":"success"});
                    }
            });
        });
});
module.exports=router;
