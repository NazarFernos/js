function combineArrays(arr) {
    var arrTwo = [4,5,6];
    var arr2 = [...arr, ...arrTwo];
    return arr2;
}
console.log(combineArrays([1,2,3]));
