const Clinic = require('../models/clinicModel');

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