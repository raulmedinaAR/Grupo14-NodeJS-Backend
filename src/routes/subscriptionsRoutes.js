const express = require ('express'); 
const {subscriptionAdd, subscriptionUpdate, subscriptionDelete} = require('../controllers/subscriptionsController');

const router = express.Router();

router.post('/add', subscriptionAdd);
router.put('/upd', subscriptionUpdate);
router.delete('/del', subscriptionDelete);

module.exports = router;
