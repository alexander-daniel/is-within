'use strict';

module.exports = isWithin;

function isWithin (input, target, threshold) {
    var upperLimit = target + threshold;
    var lowerLimit = target - threshold;
    if (input >= lowerLimit && input <= upperLimit) return true;
    else return false;
}
