// const dbConnection = require("mongoose");
const { STUDENTS } = require("../z-models/studentM");
const { INTERVIEW } = require("../z-models/interviewM");
const db = require("../z-config/mongoose-config.js");




module.exports.getSingleStudents = function (req, res) {
  STUDENTS.findById(req.query.id)
    .then((result) => {
      INTERVIEW.find({ ACTIVE: "Y" })
        .then((data) => {
          res.render('see-student', { x: result, in_details: data });
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
      res.render('student-list', { data: result });
    })
    .catch((err) => {
      res.send(err);
    });
};

//function to add the students
module.exports.addStudent = function (req, res) {
  STUDENTS.create(req.body)
    .then((result) => {
      console.log(result);
      res.redirect('/student/see-details');
    })
    .catch((err) => {
      res.send(err);
    });
};

//function to terminate the students
module.exports.terminateStdt = function (req, res) {
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
module.exports.updateStudent = function (req, res) {

  STUDENTS.findOneAndUpdate({ _id: req.query.id }, req.body)
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.addInterview = function (req, res) {
  const interview_id=req.query.interview_id+'';
  console.log(interview_id);
  if (req.query.work == 'Add') {
    STUDENTS.findByIdAndUpdate({ _id: req.query.id },{ $push: { INTERVIEWS: interview_id } })
      .then((result) => {
        // console.log(result);
        res.json({ "work": "Un-assign" });
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    
    STUDENTS.findByIdAndUpdate({ _id: req.query.id }, { $pull: { INTERVIEWS: interview_id } })
      .then((result) => {
        // console.log(result);
        res.json({ "work": "Assign" });
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }
};

module.exports.renderAddStudentPage=function(req,res){
  res.render('add-student');
}

