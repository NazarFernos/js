function getMaxMinNumber(arr) {
    var min, max;
    arr.forEach(function(number) {
        if(number === 0 || number > max) {
        max = number;
        }
        if(number === 0 || number < min) {
        min = number;
        }
    })
    return {max, min};
}
console.log(getMaxMinNumber([1, 0, 6, -80]));
