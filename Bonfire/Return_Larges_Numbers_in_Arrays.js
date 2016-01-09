function largestOfFour(arr) {
    var bigNum = [];
    // You can do this!
    for (var i = 0; i < arr.length; i++) {
        var largest = 0;
        for (var j = 0; j < arr[i].length; j++) {
            if (largest < arr[i][j]) {
                largest = arr[i][j];
            }
            bigNum[i] = largest;
        }
    }
    return bigNum;
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
