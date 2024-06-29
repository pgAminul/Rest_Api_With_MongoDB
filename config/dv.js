const mongoose = require('mongoose')
const config = require('./config')

const databaseURL = config.db.url;


// connect database here 
mongoose.connect(databaseURL)
.then(()=>{
    console.log('mongodba atlas is connected')
})
.catch((error)=>{
    console.log(error.message)
    process.exit(1)
})