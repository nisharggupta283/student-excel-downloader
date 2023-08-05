module.exports.startDownload = function (req, res) {
  exportCountriesFile(req, res);
};
const countries = [
  { name: "France", capital: "Paris", countryCode: "FR", phoneIndicator: 33 },
  { name: "Japan", capital: "Tokyo", countryCode: "JP", phoneIndicator: 81 },
];

async function exportCountriesFile(req, res) {
  const workbook = new Excel.Workbook();
  const worksheet = workbook.addWorksheet("Countries List");

  worksheet.columns = [
    { key: "name", header: "Name" },
    { key: "countryCode", header: "Country Code" },
    { key: "capital", header: "Capital" },
    { key: "phoneIndicator", header: "International Direct Dialling" },
  ];

  countries.forEach((item) => {
    worksheet.addRow(item);
  });

  const headerRow = worksheet.getRow(1);
  headerRow.font = { bold: true };
  headerRow.alignment = { horizontal: "center" };
  headerRow.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFCCCCCC" }, // Light gray background
  };
  headerRow.font = { size: 18, name: "Calibri" };

  await workbook.xlsx.writeFile(path.resolve(__dirname, "uploads/countries.xlsx"));
  const result = await workbook.xlsx.readFile(
    path.resolve(__dirname, "countries.xlsx")
  );
  // console.log(result);
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader("Content-Disposition", "attachment; filename=data.xlsx");
  return result.xlsx.write(res).then(function () {
    res.status(200).end();
  });
}
