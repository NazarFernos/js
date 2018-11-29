function combineArrays(arr) {
    var arrTwo = [4,5,6];
    var arr = [1,2,3, ...arrTwo];
    return arr;
}
console.log(combineArrays([1,2,3]));
