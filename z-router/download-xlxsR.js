const express = require("express");
const xlsxController = require("../z-controller/xlxsC");

const router = express.Router();

router.all('/render-exceldownloader',xlsxController.renderXlXSDownPage)
router.all("/start-download", xlsxController.exportCountriesFile);

module.exports = router;
