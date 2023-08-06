const express = require("express");
const interviewcontroller = require("../z-controller/interviewC");

const router = express.Router();

router.all("/get-interview", interviewcontroller.getAllInterviewDetails);
router.all("/add-interview", interviewcontroller.addInterviewDetails);
router.all("/delete-interview", interviewcontroller.deleteInterview);
router.all("/update-interview", interviewcontroller.updateInterviewDetails);
router.all('/show-add-interview',interviewcontroller.renderAddInterviewPage);
module.exports = router;
