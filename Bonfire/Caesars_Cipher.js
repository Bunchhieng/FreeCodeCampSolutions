/**
 * Created by Bunchhieng on 1/8/2016.
 */
function rot13(str) {
    var newStr = "";
    for (var i = 0, len = str.length; i < len; i++) {
        var code = str.charCodeAt(i);
        if (code === 63) {
            newStr += "?";
        } else if (code + 13 >= 65 && code + 13 <= 90) {
            newStr += String.fromCharCode(code + 13);
        } else if (code + 13 > 90) {
            newStr += String.fromCharCode(code - 13);
        } else if (code == 32) {
            newStr += " ";
        } else if (code == 33) {
            newStr += "!";
        } else if (code == 46) {
            newStr += ".";
        }
    }
    return newStr;
}
// https://github.com/FreeCodeCamp/FreeCodeCamp/issues/5886
function rot13Alt(str) {
    var codeArr = str.split("");
    var decodeArr = [];
    for(var i = 0, len = str.length; i < len; i++) {
        var num = str.charCodeAt(i);
        if (num >= 65 && num <= 77) {
            num += 13;
        } else if (num >= 78 && num <= 90) {
            num -= 13;
        }
        decodeArr.push(String.fromCharCode(num));
    }
    return decodeArr.join("");
}
console.log(rot13("SERR YBIR?"));
console.log(rot13Alt("SERR YBIR?"));