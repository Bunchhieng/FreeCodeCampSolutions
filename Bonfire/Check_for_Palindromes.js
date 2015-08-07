function palindrome(str) {
  // Good luck!
  str = str.replace(/[^A-Za-z]/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
}

palindrome("eye");
