function getArraySum(arr) {
  var arrSum = 0;

  for (var i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  return arrSum;
}
console.log(getArraySum([122, 1, 4, 3, 55, 6, 9, 2]));
