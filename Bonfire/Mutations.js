/**
 * Created by Bunchhieng on 1/8/2016.
 */
function mutation(arr) {
    var sec = arr[1].toLowerCase();
    var first = arr[0].toLowerCase();
    for (var i = 0, len = sec.length; i < len; i++) {
        if (first.indexOf(sec[i]) < 0) { //str.indexOf(searchValue[, fromIndex]) return index of first character, else -1
            return false;
        }
    }
    return true;
}
console.log(mutation(["hello", "hey"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["hello", "Hello"]));