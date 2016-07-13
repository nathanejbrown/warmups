function isPalindrome(str) {
  str = str.replace(/,/g , ""); //replace all commas w/ ""
  str = str.replace(/ /g , ""); //replace all space w/ ""
  str = str.toLowerCase();
  newStr = '';
  for(x=str.length-1;x>=0;x--) {
    newStr += str[x];
  }
  if(newStr === str) return true;
  else return false;
}
