const app = require('./../../../app/server/app');
const request = require('supertest')(app);
const assert = require('assert');
const {
    apagaDados,
    carregaDados
} = require('../../data/dadosBancoTest');


describe('Integration Test', function () {
    this.timeout(30000); //30s of timeout

    beforeEach(async () => {
        try {
            await apagaDados();
            await carregaDados();

        } catch (error) {
            console.log(error);
        }

    });

    it('Should return all pois', (done) => {
        this.timeout(20000); //configuração para setar o timeout desse teste em específico para 20s.

        request.get('/poi')
            .expect(res => {
                assert.equal(res.body.data.length, 7);
            })
            .expect(200, done);
    });

    it('Given a valid POI should insert in DB', (done) => {
        const newPoi = {
            name: 'Hospital de Base',
            x: 54,
            y: 21
        };

        request.post(`/poi`)
            .send(newPoi)
            .expect(201, done);
    });

    it('Given a valid Point and distance should return all poi near of the point given the max distance', (done) => {
        const payload = {
            x: 20,
            y: 10,
            d: 10
        };

        request.post(`/poi/near`)
            .send(payload)
            .expect((res) => {
                res.body.data.map(item => {
                    delete item._id; 
                    delete item.__v;
                })

                assert.deepEqual(res.body, {
                    data: [{
                            name: 'Lanchonete',
                            x: 27,
                            y: 12,
                        },
                        {
                            name: 'Joalheria',
                            x: 15,
                            y: 12,
                        },
                        {
                            name: 'Pub',
                            x: 12,
                            y: 8,
                        },
                        {
                            name: 'Supermercado',
                            x: 23,
                            y: 6,
                        }
                    ]
                })
            })
            .expect(200, done);
    });


    it('Given a invalid POI should return 422 and the message error', (done) => {
        const wrongPoi = {
            name: 'Hospital de Base',
            x: -54,
            y: 21
        };

        request.post(`/poi`)
            .send(wrongPoi)
            .expect(res => {
                assert.deepEqual(res.body, {
                    errors: {
                        x: {
                            message: 'Path `x` (-54) is less than minimum allowed value (0).',
                            value: -54
                        }
                    },
                    message: 'PointOfInterest validation failed: x: Path `x` (-54) is less than minimum allowed value (0).'
                })
            })
            .expect(422, done);
    });
});