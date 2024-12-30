const http = require("http");
const fs= require("fs");
const url=require("url");

const myServer = http.createServer((req,res)=>{

    if(req.url === "/favicon.ico") return res.end();

    const log = `${new Date(Date.now()).toLocaleString()}: ${req.url} New Req Received\n`;
    const myUrl=url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile('log.txt', log ,(err,data)=>{
        switch(myUrl.pathname){
            case "/":
                res.end("Homepage");
                break
            case "/about":
                const username=myUrl.query.myname
                res.end(`Hello dear ${username}`);
                break
            case "/search":
                const search=myUrl.query.search_query;
                res.end(`Here are you result for `+ search);
                break;
            default:
                res.end("404 Not found");
                break
        }
    });
});

myServer.listen(8000,()=>console.log("server Started"))