const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    StudentName : {type:String},
    StudentID : {type:Number},
    Email : {type:String},
    Department : {type:String},
    Mentors : {type:Array}

})

const StudentData = mongoose.model("StudMentor",StudentSchema);
module.exports = {StudentData};