function getSums(arr) {
  var arrSum = 0;

  arr.forEach(function(item) {
    return arrSum += item;
  });

  return arrSum;
}

console.log(getSums([1,4,6,8,9]));
