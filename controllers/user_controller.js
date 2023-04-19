const DB = require("../config/mongoose");
const list = require("../models/list");

module.exports.user = function(req,res){
   list.find({})
   .catch((err)=>{
    console.log("Error to fetching data from DB",err);
    return;
   })
   .then((tasks)=>{
    return res.render("home",{
        title:"TODO app",
        addTasks:tasks
    })
   })
}