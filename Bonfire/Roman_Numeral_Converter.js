/**
 * Created by Bunchhieng on 1/10/2016.
 */
function convert(num) {
    // 1 I
    // 5 V
    // 10 X
    // 100 C
    // 500 D
    // 1000 M
    // Create arrays with default conversion with matching indices.
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    var romanized = '';

    // Loop through the indeces of the decimalValue array
    for (var index = 0, len = decimalValue.length; index < len; index++) {
        // Continue to loop while the value at the current index will fit into numCopy
        while (decimalValue[index] <= num) {
            // Add the Roman numeral & decrease numCopy by the decimal equivalent
            romanized += romanNumeral[index];
            num -= decimalValue[index];
        }
    }
    return romanized;
}

console.log(convert(36));