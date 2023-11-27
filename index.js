const express = require("express");
const mongoose = require("mongoose");
const { mentordata } = require("./MentorSchema");
const { StudentData } = require("./StudentSchema");

const app = express();
app.use(express.json());
mongoose.connect("mongodb+srv://tamilmaran35:Arulmani%40123@cluster0.rjzmpfm.mongodb.net/studentmentortask")
.then(()=>{
    console.log("mongoose working")
})
app.post("/CreateMentor",async(req,res)=>{
    const data = req.body;
    const MentorDetails = await mentordata.findOne({EmployeeID:data.EmployeeID});
    console.log(MentorDetails);
    if(!MentorDetails){
        const mentor =await mentordata.create(data);
        res.json({msg:"data successfully added"}) 
    }else{
        res.json({msg:"sorry u put inavlid data"})
    }

    
 

})
app.post("/StudentMentor",async(req,res)=>{
    const stud = req.body;
    const studentdetails = await StudentData.findOne({StudentID:stud.StudentID});
    if(!studentdetails){
        const student = await StudentData.create(stud);
        res.json({msg:"data successfully added"}) 
    }else{
        res.json({msg:"sorry inavlid student Data"})
    }
   
})
app.put("/AssignMentor",async(req,res)=>{
    const data1 = req.body;
    const assignmentor = await mentordata.findOne({EmployeeID:data1.EmployeeID})
    if(assignmentor){
        for(let i=0;i<data1.StudentID.length;i++){
            assignmentor.Students.push(data1.StudentID[i]);
        }
        assignmentor.save();
        res.json({msg:"data showed sucessfully"})
    }
    res.json({msg:"mentor is not assigned"});   
})
app.put("/Selectstudent",async(req,res)=>{
    const studment = req.body;
    const onestudment = await StudentData.findOne({StudentID:studment.StudentID});
    if(onestudment){
        onestudment.Mentors.push(studment.EmployeeID)
    }
    onestudment.save()
    res.json({msg:"student id received"})
   
})
app.get("/allstudent",async(req,res)=>{
    const allstud = req.body;
    const onementor = await mentordata.findOne({EmployeeID:allstud.EmployeeID});

    res.json({msg:"one mentor to all student assigned",data:onementor.Students})
})






app.listen(4000,()=>{
    console.log("working");
})