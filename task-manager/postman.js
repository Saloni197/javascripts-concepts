const express = require('express')
const app = express()
port = 3000
app.get("/kavita",(req,res)=>{
    res.send("hello")
})
app.listen(port,()=>{
    console.log("successfull " + port)
})