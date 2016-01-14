/**
 * Created by Bunchhieng on 1/9/2016.
 */
function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var sum = 0;
    while (min <= max) {
        sum += min;
        min++;
    }
    return sum;
}

// Using Array.reduce()
function sumAll2(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var newArr = [];
    while (min <= max) {
        newArr.push[min];
        min++;
    }
    var total = newArr.reduce(function (a, b) {
        return a + b;
    });
    return total;
}
console.log(sumAll([1, 4]));
console.log(sumAll2([10, 5]));