const mongoose = require('mongoose');
const PointOfInterest = mongoose.model('PointOfInterest');


exports.listAllPOI = () => {
    return PointOfInterest.find();
}

exports.persistPOI = (novoEstabelecimento) => {
    return (new PointOfInterest(novoEstabelecimento)).save();
}