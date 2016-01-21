/**
 * Created by Bunchhieng on 1/17/2016.
 */
String.prototype.endsWith = function(c) {
    return c === this.charAt(this.length - 1);
}

var message = "hello world";
console.log(message.endsWith('d'));
console.log(message.endsWith('a'));