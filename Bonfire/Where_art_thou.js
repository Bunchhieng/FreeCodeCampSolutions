/**
 * Created by Bunchhieng on 1/12/2016.
 */
//function where(collection, source) {
//    var arr = [];
//    // What's in a name?
//    var keys = Object.keys(collection);
//    // console.log(collection.length);
//    for (var i = 0, len = collection.length; i < len; i++) {
//        // console.log(collection[i]);
//        // console.log(Object.keys(collection[i])[i]);
//        var keyCol = Object.keys(collection[i])[i];
//        var keySou = Object.keys(source)[i];
//        if (keyCol == keySou && collection[keyCol] == source[keySou]) {
//            arr.push(collection[i]);
//        }
//    }
//    return arr;
//}
function where3(collection, source) {
    var srcKeys = Object.keys(source);
    return collection.filter(function (colObj) {
        for (var i = 0, len = srcKeys.length; i < len; i++) {
            if (!colObj.hasOwnProperty(srcKeys[i]) || colObj[srcKeys[i]] !== source[srcKeys[i]]) {
                return false;
            }
        }
        return true;
    });
}
function where2(collection, source) {
    var srcKeys = Object.keys(source);
    return collection.filter(function (colObj) {
        return srcKeys.reduce(function (res, key) {
            return colObj.hasOwnProperty(key) && colObj[key] === source[key];
        }, false);
    });
}

function where(collection, source) {
    var arr = [];
    var count = 0;
    collection.forEach(function (colObj) {
        count = 0;
        for (var prop in source) {
            if (colObj.hasOwnProperty(prop) && colObj[prop] == source[prop]) {
                count++;
            }
        }
        if (count >= Object.keys(source).length) {
            arr.push(colObj);
        }
    });
    return arr;
}

console.log(where([{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null}, {
    first: "Tybalt",
    last: "Capulet"
}], {last: "Capulet"})); // [{ first: "Tybalt", last: "Capulet" }].
console.log(where([{"a": 1}, {"a": 1}, {"a": 1, "b": 2}], {"a": 1})); //[{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }].
console.log(where([{"a": 1, "b": 2}, {"a": 1}, {"a": 1, "b": 2, "c": 2}], {"a": 1, "b": 2}));

// Flatten an array of arrays from MDN example
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function (a, b) {
    return a.concat(b);
}, ['flattened']);


console.log(flattened);