const mongoose=require(`mongoose`)

const CrudScheme=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },dob:{
        type:Date,
        required:true
    },email:{
        type:String,
        required:true
    },contact:{
        type:Number,
        required:true
    },password:{
        type:String,
        required:true
    },address:{
        type:String,
        required:true
    }
})

const CrudModel=mongoose.model('crudModel',CrudScheme);
 module.exports= CrudModel