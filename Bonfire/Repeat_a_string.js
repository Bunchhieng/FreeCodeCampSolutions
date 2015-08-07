function repeat(str, num) {
  // repeat after me
  if (num > 0)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
    return str.repeat(num);
  return '';
}

repeat('abc', 3);
