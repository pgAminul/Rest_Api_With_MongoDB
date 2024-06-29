const express = require('express')
const Home = require('../Controler/user_controller')
const {getAllUsers, createUser,getOneUser,deleteUser,updateUser} = require('../Controler/user_controller')
const Router = express.Router()


Router.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

Router.get('/api/user',getAllUsers)
Router.post('/api/user',createUser)
Router.get('/api/user/:id',getOneUser)
Router.delete('/api/user/:id',deleteUser)
Router.put('/api/user/:id',updateUser)

module.exports = Router
 