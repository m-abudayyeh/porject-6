const express = require("express");
const { getTotalDonations } = require("../controllers/donorController");

const router = express.Router();

router.get("/total-donations", getTotalDonations);

module.exports = router;
