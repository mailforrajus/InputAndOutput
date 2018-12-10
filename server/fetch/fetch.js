var express=require("express");
var mongoDB=require("mongodb");
var angularClient=mongoDB.MongoClient;
var router=express.Router();
 router.get("/",(req,res)=>{
angularClient.connect("mongodb://localhost:27017/angularCRUD",(err,db)=>{
                        db.collection("employees").find().toArray((err,array)=>{
                            if(err){
                                    res.send("error while fecthing records");
                            }else{
                                res.send(array);
                            }
                        });
});
 });
 module.exports=router;