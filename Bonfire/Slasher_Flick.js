/**
 * Created by Bunchhieng on 1/8/2016.
 */
function slasher(arr, howMany) {
    arr.splice(0, howMany);

    return arr//arr.slice(howMany, arr.length);
}
console.log(slasher([1, 2, 3], 2));