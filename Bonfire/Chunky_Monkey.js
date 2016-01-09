/**
 * Created by Bunchhieng on 1/8/2016.
 */
function chunk(arr, size) {
    var finalArr = [];
    if (size < arr.length) {
        for (var i = 0, len = arr.length; i < len; i += size) {
            finalArr.push(arr.slice(i, i + size));
        }
    }
    return finalArr;
}
console.log(chunk(["a", "b", "c", "d"], 2));
console.log(chunk([0, 1, 2, 3, 4, 5], 3));