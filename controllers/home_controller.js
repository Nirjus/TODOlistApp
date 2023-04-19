const DB = require("../config/mongoose");
const list = require("../models/list");
module.exports.home = function(req,res){
    list.find({})
    .then((tasks)=>{
    return res.render("home",{
        title:"TODO app",
        addTasks:tasks
    })
})
.catch((err)=>{
    console.log(err);
    return;
})
}