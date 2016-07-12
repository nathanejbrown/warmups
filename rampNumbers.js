function rampNumbers(n) {
  num = n.toString().length;
  for(x=1; x<num; x++) {
    if(n.toString()[x-1] > n.toString()[x]) {
      return false;
    }
    else {
      continue;
    }
  }
  return true;
}
