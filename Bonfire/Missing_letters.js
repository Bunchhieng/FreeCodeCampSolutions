/**
 * Created by Bunchhieng on 1/13/2016.
 */
//function fearNotLetter(str) {
//    // 97 to 122
//    var missing = str.split("").map(function (val) {
//        console.log(val);
//        if (str.indexOf(val) == -1) {
//            return val;
//        } else {
//            return undefined;
//        }
//    });
//}
function fearNotLetter(str) {
    var first = str.charCodeAt(0);
    var last = str.charCodeAt(str.length - 1);
    var missing = '';
    while (first < last) {
        if (str.indexOf(String.fromCharCode(first)) === -1) {
            missing = String.fromCharCode(first);
            break;
        } else {
            missing = undefined;
        }
        first++;
    }
    return missing;
}

console.log(fearNotLetter("abcdefghjklmno"));