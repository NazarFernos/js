function getArraySum(arr) {
  var result = [];
  if (!arr.length) {
    return result;
  }
  var result = arr.reduce(function(a,b) {
    return a + b;
  },0);
  return result;
}
console.log(getArraySum([1, 4, 3, 6, 9]));
