const mongoose = require("mongoose");

const student_schema = new mongoose.Schema(
  {
    NAME: {
      type: String,
      required: true,
    },
    AGE: {
      type: String,
      required: true,
    },
    GENDER: {
      type: String,
      required: true,
    },
    STUDENT_ID: {
      type: String,
    },
    COURSE: { type: String },
    BATCH: { type: String },
    MOBILE: { type: String },
    DOB: { type: String },
    REMARK: { type: String },
    COLLEGE: String,
    YEAR: String,
    FATHER_NAME: { type: String },
    MOTHER_NAME: { type: String },
    ADMISSION_DATE: { type: String },
    PREVIOUS_EXPERIENCE: {
      type: String,
    },
    NIN_TYPE: {
      type: String,
      required: true,
    },
    NIN_NUMBER: {
      type: String,
      required: true,
    },
    EMAIL: {
      type: String,
    },
    ACTIVE: {
      type: String,
      default: "Y",
    },
    INTERVIEWS: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);
module.exports.STUDENTS = mongoose.model("STUDENTS_DETAILS", student_schema);
