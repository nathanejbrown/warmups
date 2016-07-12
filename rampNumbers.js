/*Ramp Numbers A ramp number is a number whose digits from left to right either only rise or stay the same. 1234 is a ramp number as is 1124. 1032 is not.
Input: A positive integer, n.
Output: true if the input is a ramp number, false if it is not*/

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
