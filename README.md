# is-within [![Build Status](https://travis-ci.org/alexander-daniel/is-within.svg?branch=master)](https://travis-ci.org/alexander-daniel/is-within)

Simple tool for testing if a given input is within a threshold of a target.

# example
```javascript
var isWithin = require('is-within');

var input = 5;
var target = 6;
var threshold = 2;
var thresholdZero = 0;

isWithin(input, target, threshold); // -> true
isWithin(input, target, thresholdZero); // -> false
```

## isWithin(input, target, threshold)
- `input` - the number you want to test
- `target` - the target number
- `threshold` - how much tolerance +/- from the target to allow

## installation
```bash
npm install is-within
```

## test
```bash
npm test
```

## licence
MIT
