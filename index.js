'use strict';

module.exports = isWithin;

function isWithin (input, target, threshold) {
    if (input - target <= threshold) return true;
    else return false;
}
