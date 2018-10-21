function getMaxMinNumber(arr) {
    var min, max;
    arr.forEach(function(item, arr) {
        if(item == 0 || item >= max) {
           max = item;
        }
        if(item == 0 || item <= min) {
           min = item;
        }
    })
    return {max, min};
}
console.log(getMaxMinNumber([1, 0, 6, -80]));
