// const dbConnection = require("mongoose");
const { STUDENTS } = require("../z-models/studentM");
const { INTERVIEW } = require("../z-models/interviewM");
const db = require("../z-config/mongoose-config.js");




module.exports.getSingleStudents = function (req, res) {
  STUDENTS.findById(req.query.id)
    .then((result) => {
      INTERVIEW.find({ ACTIVE: "Y" })
      .then((data) => {
        res.render('see-student',{x:result,in_details:data});
      })
      .catch((err) => {
        res.send(err);
      });
    })
    .catch((err) => {
      res.send(err);
    });
};

//function to get details of all the students
module.exports.getAllStudents = function (req, res) {
  STUDENTS.find({ ACTIVE: "Y" })
    .then((result) => {
      // console.log(result);
      res.render('student-list',{data:result});
    })
    .catch((err) => {
      res.send(err);
    });
};

//function to add the students
module.exports.addStudent = function (req, res) {
  console.log("request data-------------------------------------->");
  console.log(req.body);
  console.log("request data end-------------------------------------->");
  STUDENTS.create(req.body)
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

//function to terminate the students
module.exports.terminateStdt = function (req, res) {
  console.log("delete request data-------------------------------------->");
  console.log(req.body);
  console.log(req.query);
  console.log("delete request data end-------------------------------------->");
  STUDENTS.findOneAndUpdate({ _id: req.query.id }, { ACTIVE: "N" })
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

//function to update the single student
module.exports.updateStudent  = function (req, res) {
  console.log("update request data-------------------------------------->");
  console.log(req.body);
  console.log(req.query);
  console.log("update request data end-------------------------------------->");

  STUDENTS.findOneAndUpdate({ _id: req.query.id }, req.body)
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
