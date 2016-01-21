/**
 * Created by Bunchhieng on 1/14/2016.
 */
function unite(arr1, arr2, arr3) {
    return [].reduce.apply([], arguments);
}

console.log(unite([1, 3, 2], [5, 2, 1, 4], [2, 1]));