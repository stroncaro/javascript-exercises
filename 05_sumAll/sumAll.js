const sumAll = function(start, end) {
  if (typeof start !== 'number' || typeof end !== 'number') {
    return 'ERROR'
  }

  if (start < 0 || end < 0) {
    return 'ERROR'
  }

  const lo = start < end ? start : end;
  const hi = start > end ? start : end;

  let sum = 0;
  for (let n = lo; n <= hi; n++) {
    sum += n;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
