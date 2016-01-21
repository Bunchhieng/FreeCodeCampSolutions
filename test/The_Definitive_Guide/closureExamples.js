/**
 * Created by Bunchhieng on 1/17/2016.
 */
function makeProperty(o, name, predicate) {
    var value;
    o["get" + name] = function () {
        return value;
    };
    o["set" + name] = function (v) {
        if (predicate && !predicate(v)) {
            console.log("set" + name + ": invalid value " + v);
        } else {
            value = v;
        }
    };
}

var o = {};
makeProperty(o, "Name", function (x) {
    return typeof x == "string";
});
o.setName("Frank");
console.log(o.getName);
o.setName(o);