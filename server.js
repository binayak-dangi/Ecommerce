const express=require('express');
const dotenv=require('dotenv').config();
const bodyParser=require('body-parser');
const morgan=require('morgan');
const connectDB=require('./db/connection');
const categoryRoute=require('./routes/categoryRoute');



const app=express();


// Middleware
app.use(morgan('dev'))
app.use(bodyParser.json());

//Middleware Routes
app.use('/api',categoryRoute)

const PORT=process.env.PORT||5000;

app.listen(PORT,()=>{ 
    console.log(`Server is running on port ${PORT}`);
})
connectDB;
