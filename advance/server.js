import express from 'express';

const app = express();


function checkRoute(req,res,next){
    console.log(req.url);
    next();
    
} 

app.use(checkRoute)

app.get("/",(req , res)=>{
    res.send("Home Page")
});


app.get("/user",(req , res)=>{
    res.send(" User Page")
});


app.get("/product",(req , res)=>{
    res.send(" Product Page")
});

app.listen(5000);