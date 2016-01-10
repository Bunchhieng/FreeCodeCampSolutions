/**
 * Created by Bunchhieng on 1/8/2016.
 */
function destroyer(arr) {
    var mustRemove = [];
    for (var i = 1, len = arguments.length; i < len; i++) {
        mustRemove.push(arguments[i]);
    }
    return arr.filter(function (val) {
        /*
         Filter goes over each item in the array and, if the function inside returns true,
         that item stays in the array, if it returns false, it’s filtered out.
         */
        return mustRemove.indexOf(val) >= 0 ? false : true;
    });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));