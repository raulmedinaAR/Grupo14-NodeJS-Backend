const express = require ('express'); 
const { getActivePromotions } = require('../controllers/promotionsController');

const router = express.Router();

router.get('/get', getActivePromotions);

module.exports = router;
