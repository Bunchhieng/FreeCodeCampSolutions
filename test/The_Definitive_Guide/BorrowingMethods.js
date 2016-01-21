/**
 * Created by Bunchhieng on 1/18/2016.
 */
function borrowMethods(borrowFrom, addTo) {
    var from = borrowFrom.prototype;
    var to = addTo.prototype;

    for(m in from) {
        if( typeof from[m] != 'function') {
            continue;
        }
        to[m] = from[m];
    }
}