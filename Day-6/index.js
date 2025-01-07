const expess = require('express')

const app = expess();

app.use((req,res,next)=>{
    req.a = 5
    console.log("This is middleware 1")
    // return res.send()
    next()
})

app.use((req,res,next)=>{
    console.log("This is middleware 2 and the value of a is ",req.a)
    req.a=req.a+5;
    next();
})

app.get("/",(req,res)=>{
    return res.send(`Hello world and the value of a is ${req.a}`)
})

app.listen(8000,()=>{return console.log("Server started")})