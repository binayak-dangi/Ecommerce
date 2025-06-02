const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL)
.then(() => {
    console.log('Database connected successfully');
})
.catch((error) => {
    console.error('Database connection failed:', error.message);
}
);