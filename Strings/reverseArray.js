function reverseString(str) {
    var str2 = str.split("");
    var reverseArr = str2.reverse();
    var joinArr = reverseArr.join("");
    return joinArr;
}
console.log(reverseString("abcd"));
