const express = require ('express'); 
const {subscriptionAdd, subscriptionUpdate, subscriptionDelete} = require('../controllers/subscriptionsController');

const router = express.Router();

router.post('/', subscriptionAdd);
router.put('/', subscriptionUpdate);
router.delete('/', subscriptionDelete);

module.exports = router;
