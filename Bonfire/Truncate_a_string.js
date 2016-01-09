/**
 * Created by Bunchhieng on 1/8/2016.
 */
function truncate(str, num) {
    if (num <= 3) {
        return str.slice(0, num) + "...";
    } else if (num < str.length) {
        return str.slice(0, num - 3) + "...";
    }
}

console.log(truncate("Absolutely Longer", 2));
console.log(truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
