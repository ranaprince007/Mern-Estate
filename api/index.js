import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log('connected to mongodb!');
}).catch((err)=>{
    console.log("err",err);
}).finally(()=>{
    console.log('connection success')
})



const app=express();

app.listen(3000,()=>{
    console.log("server is running on port no 3000!");
})
