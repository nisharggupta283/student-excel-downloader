//App required imports
const express = require("express");
const bodyParser = require("body-parser");
const Excel = require("exceljs");
const path = require("path");
const {STUDENTS} =require('./z-models/studentM');

//My imports
const studentRouter = require("./z-router/studentR");
const interviewRouter = require("./z-router/interviewR");
const xlsxRouter = require("./z-router/download-xlxsR");
// const request = require("./jobs-opening/job-api");
//Start of Express
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'z-views');
app.use(express.static('z-static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// http://localhost:8080/student/add-stdt            to add the student
// http://localhost:8080/student/see-details         to see details of students/student
// http://localhost:8080/student/terminate-stdt      to delete details of student
// http://localhost:8080/student/update-stdt         to update details of student
app.use("/student", studentRouter);

// http://localhost:8080/student/get-interview            to get details of interview
// http://localhost:8080/student/add-interview            to add details of interview
// http://localhost:8080/student/delete-interview         to delete details of interview
// http://localhost:8080/student/update-interview         to update details of interview
app.use("/interview", interviewRouter);

// http://localhost:8080/excel/start-download
app.use("/excel",xlsxRouter);


// app.all("/job-opening", request);

app.all('/login',function(req,res){
  console.log(req.body);
  //make schema of user 
  //get details of employee from mongosse and validate then forward it
  //
})

app.all('/register',function(req,res){
  res.render('registration.ejs');
})

app.all('/save-employee',function(req,res){
  console.log(req.body);
  //save detail of employee and then redirect to login.ejs
  res.render('login.ejs');
});
//just for testing purpose

app.all('/',function(req,res){
  let fields=STUDENTS.schema.obj;
  console.log(Object.keys(fields));
  res.render('login.ejs',{ff:Object.keys(fields)});
})
//delete this after testing

//Start of server
app.listen(8080, function (err) {
  if (err) { 
    console.log(
      "Error Occured----------------------------------------------------------------"
    );
    console.log(err);
    console.log(
      "Error Ocuured End-----------------------------------------------------------------"
    );
    return;
  }
  console.log("Server running at port 8080");
});
