// routes/authRouter.js

const express = require("express");
const authCtrl = require("../controllers/authCtrl");
const dashboardCtrl = require("../controllers/dashboardController");
const isMedicalWorker = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);
router.post('/logout', authCtrl.logout);
router.post('/refresh_token', authCtrl.generateAccessToken);
router.post('/register-medical-worker', authCtrl.registerMedicalWorker);
router.post('/clinics', authCtrl.uploadClinicImage, authCtrl.createClinics);

router.get('/clinics', authCtrl.getClinics);
router.get('/dashboard', authCtrl.generateAccessToken, isMedicalWorker, dashboardCtrl.getDashboard);

module.exports = router;