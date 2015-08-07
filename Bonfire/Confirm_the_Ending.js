function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var n = str.split(" ");
  if (n[n.length - 1] === target || str.substr(-1) === target)
    return true;
  return false;
}

end('Bastian', 'n');
