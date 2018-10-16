function getSortedArray(a, b) {
  if (a > b) {
  return 1;
  };
  if (a < b) {
  return -1;
  };

  var arr = [122, 1, 4, 3, 55, 6, 9, 2];
  arr.sort(getSortedArray);
  return (a,b);
}
console.log(getSortedArray([122, 1, 4, 3, 55, 6, 9, 2]));
