/**
 * Created by Bunchhieng on 1/13/2016.
 */
function myReplace(str, before, after) {
    var newStr = str.split(" ");
    //console.log(newStr);
    for (var i = 0, len = newStr.length; i < len; i++) {
        //console.log(newStr[i]);
        if (newStr[i] === before) {
            var first = newStr[i][0];
            //console.log(first);
            if (first == first.toUpperCase() || after[0] == after[0].toUpperCase()) {
                newStr[i] = after.charAt(0).toUpperCase() + after.slice(1);
            } else {
                newStr[i] = after;
            }
        }
    }
    return newStr.join(" ");
}
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

function myReplace2(str, before, after) {
    var index = str.indexOf(before);
    if (str[index] === str[index].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    str = str.replace(before, after);
    return str;
}