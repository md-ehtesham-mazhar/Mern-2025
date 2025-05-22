const Service = require("../models/service-model");

const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response || response.length === 0) {
      // Handle the case where no documents were found
      return res.status(404).json({ msg: "No services found" });
    }
    return res.status(200).json({ msg: "Services found", data: response });
  } catch (error) {
    console.log(`Error from the server: ${error}`);
    return res.status(500).json({ msg: "Server error", error });
  }
};

module.exports = services;
