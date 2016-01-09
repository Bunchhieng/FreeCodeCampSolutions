function end(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    //var n = str.split(" ");
    //var bool;
    //if (target.length < str.length) {
    //    for (var i = 1, len = target.length; i < len; i++) {
    //        if (n[n.length - i] == target || str.substr(-i) == target) {
    //            bool = true;
    //        } else {
    //            bool = false;
    //        }
    //    }
    //}
    //return bool;

    /**
     var str = 'abcdefghij';

     console.log('(1, 2): '   + str.substr(1, 2));   // '(1, 2): bc'
     console.log('(-3, 2): '  + str.substr(-3, 2));  // '(-3, 2): hi'
     console.log('(-3): '     + str.substr(-3));     // '(-3): hij'
    **/
    return str.substr(-target.length) === target;
}
console.log(end("He has to give me a new name", "me"));
