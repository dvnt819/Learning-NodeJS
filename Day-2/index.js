const http = require("http");
const fs= require("fs");

const myServer = http.createServer((req,res)=>{
    const log = `${new Date(Date.now()).toLocaleString()}: ${req.url} New Req Received\n`;
    fs.appendFile('log.txt', log ,(err,data)=>{
        switch(req.url){
            case "/":
                res.end("Homepage");
                break
            case "/about":
                res.end("Welcome to about page,I am dhvanit");
                break
            default:
                res.end("404 Not found");
                break
        }
    });
});

myServer.listen(8000,()=>console.log("server Started"))