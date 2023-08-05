const express = require("express");
const xlsxController = require("../z-controller/xlxsC");

const router = express.Router();

router.all("/start-download", xlsxController.startDownload);

module.exports = router;
