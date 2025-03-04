const { Donor } = require("../models");

const getTotalDonations = async (req, res) => {
  try {
    const result = await Donor.sum("totalDonations");

    res.status(200).json({
      totalDonations: result || 0,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while retrieving total donations." });
  }
};

module.exports = { getTotalDonations };
