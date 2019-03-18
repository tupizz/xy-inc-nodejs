const _ = require('underscore')
const poiService = require('../services/poiService');
const getDistanceFromTwoPoints = require('./../utils/getDistanceFromTwoPoints')

exports.listAllPOI = async (req, res) => {
    const listOfAllPOI = await poiService.listAllPOI();
    res.status(200).json({ data: listOfAllPOI });
}

/**
 *  req.body = {
 *      "x": Integer
 *      "y": Integer
 *      "d": Integer
 *  }
 */
exports.listAllNearestPOI = async (req, res) => {
    const listOfAllPOI = await poiService.listAllPOI();
    let point = {
        x: req.body.x,
        y: req.body.y
    }
    let filteredPoi = _.filter(listOfAllPOI, (poiFromDb) => {
        return getDistanceFromTwoPoints(point, poiFromDb, req.body.d)
    })
    res.status(200).json({ data: filteredPoi });
}

exports.persistPOI = async (req, res) => {
    const newPOI = req.body;
    const insertedPOI = await poiService.persistPOI(newPOI);
    res.status(201).json({data: insertedPOI, status: 'Criado novo POI'});
}