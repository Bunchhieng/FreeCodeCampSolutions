//=======================
//Object stuff
//=======================
var bun = {
  "name": "Bunchhieng",
  "height": 171,
  "age": 23,
  "sex": "male"
};

console.log(bun["name"] + "==" + bun.name);

//=======================
//First class function
//=======================
var ronaldo = function(age, speed, limit) {
  this.age = age;
  this.speed = speed;
  this.limit = limit;
  while (age < limit) {
    console.log("This guy is a beast!" + age);
    if (age == 13) break;
    age++;
  }
}
ronaldo(12, 20, 30);
//=======================
//Efficient way to loop through array
//=======================
var len = 0;
var start = new Date().getTime();
var a = [1, 3, 7, 9, 11, 15];
for (var i = 0, len = a.length; i < len; i++) {
  console.log(a[i]);
}
var end = new Date().getTime();
var time = end - start;
console.log("That speed Efficient:" + time);
//=======================
//Inefficient way to loop through array
//=======================
var start1 = new Date().getTime();
for (var i = 0; i < a.length; i++) {
  console.log(a[i]);
}
var end1 = new Date().getTime();
var time1 = end1 - start1;
console.log("That speed Inefficient:" + time1);
//=======================
//Iterate through array with forEach
//=======================
a.forEach(function(currentVal, index, array) {
  console.log(currentVal);
  console.log(array)
});
//=======================
//Prepend item to the start of the array
//=======================
a.unshift("ehhhhhh?");
console.log(a);
//=======================
//Average function
//=======================
function average() {
  var sum = 0;
  for (var j = 0, len = arguments.length; j < len; j++) {
    sum += arguments[i];
  }
  return sum / arguments.length;
}
console.log("Average of 1, 2, 3, 4: " + average(1, 2, 3, 4));
//=======================
//Hiding local variable with anoynymous function
//=======================
var a = 1;
var b = 2;
(function() {
  var b = 3;
  a += b;
})();
console.log(a + " " + b);
//=======================
//Call function recursively in JavaScript
//=======================
function countChars(elm) {
  if (elm.nodeType == 3) {
    return elm.nodeValue.length;
  }
  var count = 0;
  for (var i = 0, child; child = elm.childNodes[i]; i++) {
    count += countChars(child);
  }
  return count;
}
