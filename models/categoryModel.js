const mongoose=require('mongoose');

const categorySchema=new mongoose.Schema({
    category_name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
},{timestamps});

module.exports=mongoose.model('category',categorySchema);