function getMaxMinNumber(arr) {
    var min, max;
    arr.forEach(function(item, i, arr) {
        if(i == 0 || arr[i] >= max) {
           max = arr[i];
        }
        if(i == 0 || arr[i] <= min) {
           min = arr[i];
        }
    })
    return {max, min};
}
console.log(getMaxMinNumber([1, 0, 6, -80]));
