function getArraySum(arr) {
  var arr = [122, 1, 4, 3, 55, 6, 9, 2];
  var arrSum = 0;

  for (i=0; i<arr.length; i++)
    arrSum += arr[i];
  return arrSum;
}
console.log(getArraySum([122, 1, 4, 3, 55, 6, 9, 2]));
