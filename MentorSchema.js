const mongoose =require("mongoose");

const MentorSchema = new mongoose.Schema({
    MentorName : {type:String},
    EmployeeID :{type:Number},
    Email : {type:String},
    Department : {type:String},
    Students : {type:Array}
})

const mentordata = mongoose.model("Mentor",MentorSchema);
module.exports = {mentordata};