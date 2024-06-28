const express = require ('express'); 
const {getProductsMen, getProductsWoman} = require('../controllers/productsController');
const router = express.Router();


router.get('/men', getProductsMen);
router.get('/woman', getProductsWoman);

module.exports = router;

