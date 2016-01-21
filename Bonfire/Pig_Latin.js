/**
 * Created by Bunchhieng on 1/13/2016.
 */
function translate(str) {
    var pigLatin = '';
    var regex = /[aeiou]/gi;
    if(str[0].match(regex)) {
        pigLatin = str + 'way';
    } else {
        var vowel = str.indexOf(str.match(regex)[0]);
        pigLatin = str.substr(vowel) + str.substr(0, vowel) + 'ay';
    }
    return pigLatin;
}
/*function translate2(str) {
    var vowel = ['a', 'e', 'o', 'i', 'u'];
    var newStr = '';
    var ch = str.charAt(0);
    //console.log(ch);
    if ((/^[aeiou]$/i).test(ch) == false) {
        newStr = str.slice(1) + str.charAt(0) + 'ay';
    }
    vowel.forEach(function (v) {
        if (str.charAt(0) === v) {
            newStr = str + 'way';
        }
    });

    return newStr;
}*/
console.log(translate('consonant'));
console.log(translate('algorithm'));
console.log(translate('glove'));

/*
function translate(str) {
    var vowel = ['a', 'e', 'o', 'i', 'u'];
    var off = '';
    while (true) {
        if ((/^[aeiou]$/i).test(str[0]) === false) {
            str = str.slice(1) + str.charAt(0) + 'ay';
        } else {
            vowel.forEach(function (v) {
                if (str.charAt(0) === v) {
                    str = str + 'way';
                }
            });
            break;
        }
    }
    return str;
}*/
