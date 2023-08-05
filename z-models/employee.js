const mongoose=require('mongoose');

const employee=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    }
});

module.exports.EMPLOYEE=mongoose.model("EMPLOYEE_SCHEMA", employee);