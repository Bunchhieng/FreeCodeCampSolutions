/**
 * Created by Bunchhieng on 1/10/2016.
 */
function diff(arr1, arr2) {
    var newArr = arr1.concat(arr2);

    function check(val) {
        // if val doesn't exist in either arr1 or arr2, return val
        if (arr1.indexOf(val) === -1 || arr2.indexOf(val) === -1) {
            return val;
        }
    }

    // interesting about filter method
    return newArr.filter(check);

}
// http://stackoverflow.com/questions/1187518/javascript-array-difference?page=1&tab=oldest#tab-top
function arr_diff(arr1, arr2) {
    var arr = [], diff = [];
    for (var i = 0, len = arr1.length; i < len; i++) {
        arr[arr1[i]] = true;
    }
    for (var i = 0, len = arr2.length; i < len; i++) {
        // array on array via index.. wow technique! :-)
        if (arr[arr2[i]]) {
            delete arr[arr2[i]];
        } else {
            arr[arr2[i]] = true;
        }
    }
    for (var k in arr) {
        diff.push(k);
    }
    return diff;
}
console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5])); // 4
console.log(arr_diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));