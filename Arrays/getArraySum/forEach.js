function getArraySum(arr) {
  var arrSum = 0;

  arr.forEach(function(number) {
    arrSum += number;
  });

  return arrSum;
}

console.log(getArraySum([1,4,6,8,9]));
