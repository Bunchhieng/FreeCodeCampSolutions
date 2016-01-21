/**
 * Created by Bunchhieng on 1/13/2016.
 */
function pair(str) {
    // AT, CG
    var array = [];
    str.split("").map(function (val) {
        console.log(val);
        switch (val) {
            case 'A':
                array.push(['A', 'T']);
                break;
            case 'T':
                array.push(['T', 'A']);
                break;
            case 'C':
                array.push(['C', 'G']);
                break;
            case 'G':
                array.push(['G', 'C']);
                break;
            default:
                break;
        }
    });
    return array;
}
console.log(pair('GCG'));

function pair2(str) {
    var map = {T: 'A', A: 'T', G: 'C', C: 'G'};
    strArr = str.split("");
    for (var i = 0, len = strArr.length; i < len; i++) {
        strArr[i] = [strArr[i], map[strArr[i]]];
    }
    return strArr;
}