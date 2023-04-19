const DB = require("../config/mongoose");
const list = require("../models/list");

module.exports.del = function(req,res){
    const ID = req.query.id;
    list.findByIdAndDelete(ID).catch((err)=>{
        console.log("Item not deleted",err);
        return;
    })
    .then(()=>{
        return res.redirect("back");
    })
}