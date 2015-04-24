// using JavaScript, reverse the words in a sentence

// typical method
var reverseWordsTypically = function(words) {
  'use strict';
  return words.split(' ').reverse().join(' ');
};

// challenge:
// provide another way of doing it
// you may not use array methods,
// such as .split(), .reverse(), .push(), .join()
var reverseWordsAlternatively = function(words) {
  'use strict';
  words += ' '; // avoid an off-by-one error
  var charachterIterator = 0;
  var oneWord = '';
  var wordArray = [];
  var wordArrayIndex = 0;
  var returnString = '';

  // make an array of words, store in wordArray
  while (charachterIterator < words.length + 1) {
    if (words[charachterIterator] !== ' ') {
      // build up a single word
      oneWord += words[charachterIterator];
    }
    // once a space is reached, add the word to the array
    // ...without using .push()
    else {
      wordArray[wordArrayIndex] = oneWord;
      wordArrayIndex++;
      // reset
      oneWord = "";
    }
    charachterIterator++;
  }

  // without using .reverse() or .join()
  // build up a string by iterating through the array in reverse order
  wordArrayIndex = 0;
  for (var i = wordArray.length - 1; i > 0 ; i--) {
   returnString += wordArray[i] + ' ';
  }
  // to avoid an extra ' ', add the last word outside of the loop
  returnString += wordArray[0];

  return returnString;
};
