const enviromentConfig = require('./../../../enviroment.env')
const mongoose = require('mongoose');
const PointOfInterest = require('./../../app/models/PointOfInterest');

mongoose.set('useCreateIndex', true)
mongoose.connect(enviromentConfig.test.db, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

exports.apagaDados = () => {
    return PointOfInterest.deleteMany({});
}

const pois = [
    {
        name: 'Lanchonete',
        x: 27,
        y: 12
    },{
        name: 'Posto',
        x: 31,
        y: 18
    },{
        name: 'Joalheria',
        x: 15,
        y: 12
    },{
        name: 'Floricultura',
        x: 19,
        y: 21
    },{
        name: 'Pub',
        x: 12,
        y: 8
    },{
        name: 'Supermercado',
        x: 23,
        y: 6
    },{
        name: 'Churrascaria',
        x: 28,
        y: 2
    },
];

/**
 * Método responsável por inserir documentos no banco de teste
 */
exports.carregaDados = () => {
    return PointOfInterest.insertMany(pois);
}