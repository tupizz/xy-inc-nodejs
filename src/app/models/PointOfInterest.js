const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const pointOfInterestSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        required: 'Name of POI is required'
    },
    x: {
        type: Number,
        min: 0,
        required: 'X of POI is required'
    },
    y: {
        type: Number,
        min: 0,
        required: 'Y of POI is required'
    }
});


module.exports = mongoose.model('PointOfInterest', pointOfInterestSchema);