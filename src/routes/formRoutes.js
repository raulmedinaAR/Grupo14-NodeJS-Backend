// routes/formRoutes.js
const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.post('/', formController.procesarFormulario);

module.exports = router;
