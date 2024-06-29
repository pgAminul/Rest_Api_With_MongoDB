const express = require('express')
const app =  express()
const cors =require("cors");
const Router = require('./Router/Router')
const config = require('./config/config')
const port = config.app.port ||4000;
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

// connect database here 
require('./config/dv')

// Routing Here
app.use(Router)

// this Router for /api/user 


// Router Error Here 
app.use((req,res,next)=>{
    res.status(404).send("Router Not Found")
})

// Sesrver Error Here
app.use((err,req,res,next)=>{
    res.status(500).send("Server Have Error")
})


app.listen(port,()=>{
    console.log(`server is running http//localhost:${port}`)
})