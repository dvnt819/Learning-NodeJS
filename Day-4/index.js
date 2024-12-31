const http = require("http");
const url = require("url");
const express = require("express")

const app = express();

app.get('/',(req,res)=>{
    return res.send("Hello from the home page");
})

app.get('/about',(req,res)=>{
    return res.send("Hello from the about page hey "+ req.query.name);
})


app.listen(8002,()=> console.log("Server started"));