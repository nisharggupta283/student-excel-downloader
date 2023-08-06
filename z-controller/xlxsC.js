const Excel = require('exceljs');
const path = require('path');
const { STUDENTS } = require("../z-models/studentM");
const db = require("../z-config/mongoose-config.js");
module.exports.exportCountriesFile = async function (req, res) {

  //Data to write in excel

  const original_name = req.body.displayfield;
  const user_assigned_name = req.body.displaylabel;

  //creating header
  let header = [];
  let extractraction_field = {};
  header.push({ "key": "_id", "header": "Student ID" });
  console.log(Array.isArray(original_name));
  if (Array.isArray(original_name)) {
    for (let i = 0; i < original_name.length; i++) {
      const obj = {};
      obj["key"] = original_name[i];
      obj["header"] = user_assigned_name[i];
      extractraction_field[original_name[i]] = 1;
      header.push(obj);
    }
  }
  else {
    header.push({ "key": original_name, "header": user_assigned_name });
    extractraction_field[original_name] = 1;
  }
  // console.log(header);
  // console.log(extractraction_field);
  // await Model.find().select({ name: 1, _id: 0 });

  const workbook = new Excel.Workbook();
  const worksheet = workbook.addWorksheet("Student Info");
  worksheet.columns = header;

  STUDENTS.find().select(extractraction_field)
    .then((result) => {
      // console.log(result);
      result.forEach((item) => {
        // console.log(item);
        worksheet.addRow(item);
      });
    }).then(() => {
      //style
      const headerRow = worksheet.getRow(1);
      headerRow.font = { bold: true };
      headerRow.alignment = { horizontal: "center" };
      headerRow.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFCCCCCC" }, // Light gray background
      };
      headerRow.font = { size: 18, name: "Calibri" };

      //writing into excel
      var filepath = path.resolve(__dirname, "../", "uploads/sample.xlsx");
      console.log(filepath);
      workbook.xlsx.writeFile(filepath);

      //start download process
      res.setHeader('Content-Type', 'application/vnd.openxmlformats');
      res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");
      workbook.xlsx.write(res).then(() => { res.end(); });
    })
    .catch((err) => {
      res.send(err);
    });
}

module.exports.renderXlXSDownPage = function (req, res) {
  let fields = STUDENTS.schema.obj;
  console.log(Object.keys(fields));
  res.render('download-excel', { ff: Object.keys(fields), error: "" });
};