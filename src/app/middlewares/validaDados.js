const mongoose = require('mongoose');
const PointOfInterest = mongoose.model('PointOfInterest');
const sanitizeErrMessage = require('./../utils/sanitizeMongooseErrorMessage')
exports.validaDados = (req, res, next) => {
    let poi = new PointOfInterest(req.body);
    var err = poi.validateSync();
    
    if (err) {
        res.status(422).json(sanitizeErrMessage(err));
        return;
    }

    next();
};

exports.validaDadosDeBusca = (req, res, next) => {
    req.checkBody('x', 'you should provide a valid x').not().isEmpty().toInt();
    req.checkBody('y', 'you should provide a valid y').not().isEmpty().toInt();
    req.checkBody('d', 'you should provide a valid d - the max distance allowed to perform the query').not().isEmpty().toInt();
    const error = req.validationErrors();

    if (error) {
        res.status(422).json(error);
        return;
    }

    next();
}
