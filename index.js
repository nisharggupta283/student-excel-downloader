//App required imports
const express = require("express");
const bodyParser = require("body-parser");
const Excel = require("exceljs");
const path = require("path");
const { STUDENTS } = require('./z-models/studentM');
var session = require('express-session')

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
app.use("/excel", xlsxRouter);


// app.all("/job-opening", request);

//to add the student
app.all('/yu', function (req, res) {
  let fields = STUDENTS.schema.obj;
  console.log(Object.keys(fields));
  res.render('add-student', { ff: Object.keys(fields), error: "" });
});

//to add the interview
app.all('/in', function (req, res) {
  res.render('add-interview');
});


const { EMPLOYEE } = require('./z-models/employee');
//save logining details
app.all('/save-employee', function (req, res) {
  console.log(req.body);
  EMPLOYEE.create({
    email: req.body.email,
    pass: `${req.body.email.substring(0, 3)}${parseInt(Math.random() * 10000)}`
  }).
    then((result) => {
      console.log(result);
      res.render('login.ejs', { error: `Your password please save it ${result.pass}` });
    }).catch((err) => {
      console.log('-------------------------------------------------------error while employee registration');
      console.log(err);
      console.log('-------------------------------------------------------error while employee registration');
      return;
    })
  //save detail of employee and then redirect to login.ejs
});

//Redirect employee to Registeration
app.all('/register', function (req, res) {
  res.render('registration.ejs');
})

//Validate Logining Detail and forward user
app.all('/login', function (req, res) {
  console.log(req.body);
  EMPLOYEE.find({ email: req.body.email, pass: req.body.pass }).then((result) => {
    console.log(`result.length     ${result.length}`);
    // app.use(session({"user":"Y"}))
    console.log(`logged in succesfully ------------------------> `);
    if (result.length > 0)
      res.redirect('/interview/get-interview');
    else
      res.render('login.ejs', { error: "Invalid Credential" });
  })
    .catch((err) => {
      console.log('--------------------------------------------------Error while Logining');
      console.log(err);
      res.redirect('login.ejs', { error: "Invalid Credential" });
    });
  //make schema of user 
  //get details of employee from mongosse and validate then forward it
})

app.all('/', function (req, res) {
  res.render('login.ejs', { error: "" });
});


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
