const express=require('express');
const dotenv=require('dotenv').config();
const morgan=require('morgan');
const connectDB=require('./db/connection');
const { connect } = require('http2');



const app=express();


// Middleware
app.use(morgan('dev'));

//Middleware Routes
app.get('/',(req,res)=>{
    res.send('API is running...');
})

const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
connectDB;
