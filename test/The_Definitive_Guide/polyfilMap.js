/**
 * Created by Bunchhieng on 1/17/2016.
 */
if(!Array.prototype.map) {
    Array.prototype.map = function(f, thisObject) {
        var results = [];
        for(var len = this.length, i = 0; i < len; i++) {
            results.push(f.call(thisObject, this[i], this));
        }
        return results;
    }
}