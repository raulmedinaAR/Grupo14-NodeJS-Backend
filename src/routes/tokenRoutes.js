const express = require ('express'); 
const { getNewToken } = require('../controllers/tokenController');

const router = express.Router();

router.get('/new', getNewToken);

module.exports = router;
