function getMaxMinNumber(arr) {
    var max, min;
    for(var i = 0; i <= arr.length; i++) {
        if(i == 0 || arr[i] >= max) {
           max = arr[i];
        }
        if(i == 0 || arr[i] <= min) {
           min = arr[i];
        }
    }
    return {max, min};
}
console.log(getMaxMinNumber([1, 0, 6, -80]));
