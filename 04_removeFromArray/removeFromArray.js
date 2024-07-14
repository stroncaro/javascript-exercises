const removeFromArray = function(array, ...vals) {
  return array.filter((val) => !vals.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
