/**
 * Created by Bunchhieng on 1/8/2016.
 */
function bouncer(arr) {
    return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));