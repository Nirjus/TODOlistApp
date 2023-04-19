const mongoose = require("mongoose");

const tasksScheema = new mongoose.Schema({
      description:{
        type:String,
        required:true
      },
      date:{
        type:Date,
        default: Date.now,
        required:true
      },
      catagory:{
        type:String,
        required:true
      }
});

const list = mongoose.model("list",tasksScheema);

module.exports = list;