const expect = require('chai/register-expect');
const assert = require('assert');
const getDistanceFunction = require('./../../../app/utils/getDistanceFromTwoPoints')

describe('Unit testing', function () {
    this.timeout(30000); //30s of timeout

    it('Given two points and a threesold should return if the distance in near from each other', (done) => {
        let pointA = {
            x: 27,
            y: 12
        }

        let pointB = {
            x: 20,
            y: 10
        }

        const isNear = getDistanceFunction(pointA, pointB, 10);
        assert.equal(isNear, true);
        done();
    });

});