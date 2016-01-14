/**
 * Created by Bunchhieng on 1/10/2016.
 */
var yes = function scope() {
    var arr = [1, 2, 3, 4, 5];
    var total = arr.reduce(function (a, b) {
        return a + b;
    });
    return arr.indexOf(total) ? 1 : -1;
}
//=====================================================================
// Collision Avoidance
//=====================================================================
function foo() {
    function bar(a) {
        i = 3;
        console.log(a + i);
    }

    for (var i = 0; i < 10; i++) {
        bar(i * 2);
    }
}
//=====================================================================
// Function declarations are hoisted, but function expressions are not
//=====================================================================
foo();
function foo() {
    console.log(a); // undefined
    var a = 2;
}
// var foo = function bar() {}; <= not hoisted
//=====================================================================
// Function are hoisted first, and then variable
//=====================================================================
foo(); // 1
var foo;
function foo() {
    console.log(1);
}
foo = function () {
    console.log(2);
};
// 1 is printed instead of 2.
//=====================================================================
// Closure is when a function is able to remember and access its lexical
// scope even when that function is executing outside its lexical scope.
//=====================================================================
function foo() {
    var a = 2;

    function bar() {
        console.log(2);
    }

    return bar;
}
var baz = foo();
//baz(); // 2 -- Whoa, closure was just observed. Is this magic?
//=====================================================================
// Not sure if I get this
//=====================================================================
function wait(message) {
    setTimeout(function timer() {
        console.log(message);
    }, 1000); // 1000 milliseconds
}
wait("Hello, closure!");
//=====================================================================
// Not sure if I get this
//=====================================================================
for (var i = 1; i <= 5; i ++) {
    (function (j) {
        setTimeout(function timer() {
           console.log(j);
        }, j*1000);
    })(i);
}