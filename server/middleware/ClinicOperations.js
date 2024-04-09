const Clinic = require('../models/clinicsModel');

const getAll = async () => {
  try {
    return await Clinic.find();
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAll
};