const { INTERVIEW } = require("../z-models/interviewM");
const db = require("../z-config/mongoose-config.js");

//function to get details of all the INTERVIEW details
module.exports.getAllInterviewDetails = function (req, res) {
  INTERVIEW.find({ ACTIVE: "Y" })
    .then((data) => {
      // console.log(data);
      res.render('interview-list',{data:data});
    })
    .catch((err) => {
      res.send(err);
    });
};

//function to add the INTERVIEW details
module.exports.addInterviewDetails = function (req, res) {
  INTERVIEW.create(req.body)
    .then((result) => {
      res.redirect('/interview/get-interview');
    })
    .catch((err) => {
      res.send(err);
    });
};

//function to terminate the INTERVIEW
module.exports.deleteInterview = function (req, res) {
  console.log("delete request data-------------------------------------->");
  console.log(req.body);
  console.log(req.query);
  console.log("delete request data end-------------------------------------->");
  INTERVIEW.findOneAndUpdate({ _id: req.query.id }, { ACTIVE: "N" })
    .then((result) => {
      // console.log(result);
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

//function to update the single INTERVIEW
module.exports.updateInterviewDetails = function (req, res) {
  console.log("update request data-------------------------------------->");
  console.log(req.body);
  console.log(req.query);
  console.log("update request data end-------------------------------------->");

  INTERVIEW.findOneAndUpdate({ _id: req.query.id }, req.body)
    .then((result) => {
      // console.log(result);
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

//function which render add interview page 
module.exports.renderAddInterviewPage=function(req,res){
  res.render('add-interview');
}
