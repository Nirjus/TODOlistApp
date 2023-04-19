const express = require("express");

const app = express();
const port = 8000;
const bodyParser = require("body-parser");

//middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('assets'));

//connect router
app.use("/",require("./router"));

//setup view engine
app.set("view engine","ejs");
app.set("views","./views");

//setup the mongodb Database
// const DB = require("./config/mongoose");
// const list = require("./models/list");

let addTasks = [{
    description:"Math 20 chapter",
    date:"13-06-22",
    catagory:"personal"
},
{
    description:"Physics 30 chapters",
    date:"23-08-22",
    catagory:"Daily"
}]

app.listen(port,function(err){
    if(err){
        console.log(`server is NOT running on port: ${err}`);
    }
    console.log(`server is running on port: ${port}`);
})