const DB = require("../config/mongoose");
const list = require("../models/list");

module.exports.post = function(req,res){
   list.create({
    description:req.body.TASKS,
    date:req.body.DATE,
    catagory:req.body.CATAGORY
   }).catch((err)=>{
    console.log("faild to load the new tasks",err);
    return;
   })
   .then((newTasks)=>{
    console.log("*******",newTasks);
    return res.redirect('back');
   })
}