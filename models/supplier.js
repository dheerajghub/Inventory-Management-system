const mongoose =require('mongoose');

var supplierSchema = mongoose.Schema({
     cmpname:{
        type:String,
        required:true
    },
    materialname:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contactno:{
        type:Number,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true
    },
    costprice:{
        type:Number,
        required:true
    },
    created_on:{
        type:String
    }
});

var Suppliers = module.exports = mongoose.model('Suppliers' , supplierSchema);

module.exports.getSuppliers = (callback , limit)=>{
    Suppliers.find(callback).limit(limit);
};
module.exports.getSuppliersById = (id, callback)=>{
    Suppliers.findById(id,callback);
};

module.exports.addSupplier = (supplier,callback)=>{
    Suppliers.create(supplier ,callback); 
};
 
module.exports.updateSupplier=(id , supplier ,option, callback)=>{
    var query ={_id:id};
    var update = {
       cmpname:supplier.cmpname,
       qty:supplier.qty,
       state:supplier.state,
       materialname:supplier.materialname,
       emailid:supplier.emailid,
       costprice:supplier.costprice,
       contactno:supplier.contactno,
       address:supplier.address
    }
    Suppliers.findOneAndUpdate(query ,update, supplier, callback);
};

module.exports.removeSupplier = (id ,callback)=>{
    var query = {_id :id};
    Suppliers.remove(query ,callback);    
}