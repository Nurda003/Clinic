const Clinic = require('../server/models/clinicsModel');

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