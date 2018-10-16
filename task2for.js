function getSortedArray(arr) {
  var arr = [122, 0, 1, 4, 3, 55, 6, 9, 2];

  for (var i = 1; i < arr.length; i++) {
    for (var a = 0; a < i; a++) {
      if (arr [i] < arr [a]) {
        var b = arr [i];
        arr [i] = arr [a];
        arr [a] = b;
  }
    
    }
    
      }
  return arr;
}
console.log(getSortedArray([122, 0, 1, 4, 3, 55, 6, 9, 2]));
