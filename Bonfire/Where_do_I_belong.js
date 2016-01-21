/**
 * Created by Bunchhieng on 1/8/2016.
 */
function where(arr, num) {
    arr.push(num);
    arr.sort(function (a, b) {
        return a - b;
    });
    return arr.indexOf(num);
}

console.log(where([40, 60], 50));
console.log(where([10, 20, 30, 40, 50], 30));