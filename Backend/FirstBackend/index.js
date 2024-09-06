require('dotenv').config()
const express = require('express')
const app  = express();
const port = process.env.PORT ;

app.get('/',(req,res)=>{
    res.send("Adil ka server")
})
app.get('/link',(req,res)=>{
    res.send("Adil ka links")
})
app.get('/nodejs',(req,res)=>{
    res.send("Adil ka nodeJs")
})
app.listen(port,()=>{
    console.log("Demo Server is listing at port:",port);
})