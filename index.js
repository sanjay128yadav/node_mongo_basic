const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-comm");
const ProductSchema = new mongoose.Schema({
    name:String,
    price: Number,
    brand: String,
    category:String
});

const saveInDB = async()=>{ 
    const ProductModel = mongoose.model('products', ProductSchema);
    let data    = new ProductModel({name:"One Pluse Node025", price:1200, brand:"MicroMax", category:"mobile"});
    let result  = await data.save();
    console.log(result);
}

//saveInDB();

const updateInDB = async()=>{
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = await ProductModel.updateOne({name:"Note Max1"}, {$set:{price:1240}});
    console.log(data);
}

//updateInDB();

const deleteDataFromDB = async()=>{
    const ProductModel = mongoose.model('products', ProductSchema);
    let result = await ProductModel.deleteMany({name:'One Pluse Node25'});
    console.log(result);
}

//deleteDataFromDB();

const findDataFromDB = async()=>{
    const ProductModel = mongoose.model('products', ProductSchema);
    let result = await ProductModel.find({name:'Note Max3'});
    console.log(result);
}

findDataFromDB();