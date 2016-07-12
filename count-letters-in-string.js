countLetters = function(word, letter) {
  runningCount = 0;
  word = word.toLowerCase();
  letter = letter.toLowerCase();
  for(x=0; x<word.length; x++) {
    if(letter === word[x]) {
      runningCount++;
    }
  }
  if(runningCount === 0) {
    console.log("Not Found");
  }
  else {
  console.log(letter + " appears in the phrase " + runningCount + " times.");
  }
};
countLetters("The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.", "l");
countLetters("TheSe are SoMe WorDs", "S");
