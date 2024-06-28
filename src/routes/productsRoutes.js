const express = require ('express'); 
const {getProductsMen} = require('./controllers/productsController');
const router = express.Router();


router.get('/men', getProductsMen);
router.get('/woman', getProductsWoman);

