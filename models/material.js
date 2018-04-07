var mongoose = require('mongoose'); 
var materialSchema = mongoose.Schema({
    name:{
        type:String,
        required :'Please Enter valid name'
    },
    state:{
        type:String,
        required :true
    },
    price:{
        type:Number,
        required: true
    },
    qty:{
        type:Number,
        required:true
    },
    created_on:{
        type:String
    }
});

var Material = module.exports = mongoose.model('Material', materialSchema);

module.exports.getMaterials = (callback , limit)=>{
    Material.find(callback).limit(limit);
}
module.exports.addMaterial = (material , callback)=>{
    Material.create(material ,callback);  
}

module.exports.updateMaterial=( id , material , option ,callback)=>{
    var query = { _id:id};
    var update={
        qty: material.qty,
        state:material.state,
        price:material.price,
        name:material.name,
        created_on:material.created_on
    }
    Material.findOneAndUpdate(query ,update, material ,callback);
};

module.exports.removeMaterial =(id , callback)=>{
    var query = {_id:id};
    Material.remove(query , callback);
}
module.exports.findbyid = (id , callback)=>{
    var query = {_id:id};
    Material.findById(query , callback);
};