function findLongestWord(str) {
  var long = 0;
  var arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    if (long < arr[i].length) {
      long = arr[i].length;
    }
  }
  return long;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
