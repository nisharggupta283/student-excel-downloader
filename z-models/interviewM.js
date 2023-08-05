const mongoose = require("mongoose");

const interview_schema = new mongoose.Schema(
  {
    COMPANY:String,
    INTERVIEW_NAME: String,
    INTERVIEW_DATE: String,
    INTERVIEWER_DESIGNATION: String,
    INTERVIEWER: String,
    INTERVIEW_TIME: String,
    INTERVIEW_TOPICS: String,
    AGENDA: String,
    ACTIVE:{
      type: String, 
      default: 'Y'
    }
  },
  {
    timestamps: true,
  }
);
module.exports.INTERVIEW = mongoose.model(
  "INTERVIEW_DETAILS",
  interview_schema
);
