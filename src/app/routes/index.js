const express = require('express');
const router = express.Router();
const poiController = require('../controllers/poiController');
const { handleErrors } = require('../middlewares/handleErrors');
const { validaDados, validaDadosDeBusca } = require('../middlewares/validaDados');

router.get('/poi', handleErrors(poiController.listAllPOI));
router.post('/poi/near', validaDadosDeBusca, handleErrors(poiController.listAllNearestPOI));
router.post('/poi', validaDados, handleErrors(poiController.persistPOI));

module.exports = router;