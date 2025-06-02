const Category=require('../models/Category');


// to create data in category models
exports.postCategory=async(req,res)=>{
    let category=new Category({
        category_name:req.body.category_name
    });
    // to save data in category models
    category=await category.save();
    if(!category){
        return res.status(400).json({error:'Something went wrong, please try again later.'});
    }
    res.send(category);
}

