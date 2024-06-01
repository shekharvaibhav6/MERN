const mongoose=require('mongoose');
const url='mongodb://127.0.0.1:27017/mern';
const connectDB= async()=>{
    try{
        await mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true})
            console.log("Connected to mongodb");
    }catch(error){
        console.log('Connection error',error);
    }
}
module.exports = connectDB;
