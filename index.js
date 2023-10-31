// Code your solution in this file!
function distanceFromHqInBlocks(startBlock) {
    const hqBlock = 42
    return Math.abs(startBlock - hqBlock);
}
distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);

function distanceFromHqInFeet(startBlock) {
    return distanceFromHqInBlocks(startBlock) * 264;
}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}
distanceTravelledInFeet(43, 42);

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    }
    else if (distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02 ;
    }
    else if (distanceTravelledInFeet(start,destination) <=2500) {
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}
calculatesFarePrice(43, 42)
