
const {v4: uuidv4} = require('uuid')
const User= require('../Models/user_Module')


const getAllUsers =async(req,res)=>{
  try {
    const AllUsers = await User.find()

    res.status(201).send({
        message: JSON.stringify(`All Users Here ${AllUsers}`)
    })
  } catch (error) {
    res.status(404).send(error.message)
  }
} 

// Get One Use
const getOneUser =async(req,res)=>{
  try {
    const findOneUser = await User.findOne({
      id: req.params.id
    })

    res.status(201).send({
        message: `Get Just One user  ${findOneUser}`
    })
  } catch (error) {
    res.status(404).send(error.message)
  }
} 


  const createUser = async(req,res)=>{
    try {
        const newUser = new User({
            id : uuidv4(),
            name: req.body.name,
            age: Number(req.body.age)
        })
        await newUser.save()
      res.status(201).send({
          message:` User Sucessfully created ${newUser} `
      })

    } catch (error) {
      res.status(404).send(error.message)
    }
  } 

  const updateUser = async(req,res)=>{
    try {
      const userUpdate =await User.findOne({id: req.params.id})
      userUpdate.name = req.body.name;
      userUpdate.age = Number(req.body.age)
      await userUpdate.save()
      res.status(201).send({
          message: `User Successfully Update ${userUpdate}`
      })
    } catch (error) {
      res.status(404).send(error.message)
    }
  } 
  const deleteUser =async(req,res)=>{
    try {
      const DeleteOneUser = await User.deleteOne({
        id: req.params.id
      })
      res.status(201).send({
          message: `Successfully user Deleted ${DeleteOneUser}`
      })
    } catch (error) {
      res.status(404).send(error.message)
    }
  } 
  
  
 
module.exports = {createUser,getAllUsers,getOneUser, deleteUser,updateUser}
