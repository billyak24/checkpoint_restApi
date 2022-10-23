const mongoose= require('mongoose')
require('dotenv').config()

const connectDB = async()=>{
try {
   await mongoose.connect(process.env.mongoUrl)
    console.log('server hsd connected to database')
} catch (error) {
    console.log('error',err)
}
}
module.exports = connectDB