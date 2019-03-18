module.exports = (pointsA, pointsB, distance) => {
    let distanceFromAToB = Math.sqrt(Math.pow((pointsA.x - pointsB.x),2) + Math.pow((pointsA.y - pointsB.y),2));
    return distanceFromAToB <= distance;
}