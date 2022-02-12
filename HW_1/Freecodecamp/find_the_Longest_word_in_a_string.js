//First way - using for
function findLongestWordLength(str) {
  let strSplit = str.split(' ');
  let longestWordLength = 0;
  for(let i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWordLength){
	longestWordLength = strSplit[i].length;
     }
  }
  return longestWordLength;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");


//Second way - using method reduce()
function findLongestWordLength(str) {
  let longestWord = str.split(' ').reduce(function(intermediateLongest, currentWord) {
    return currentWord.length > intermediateLongest.length ? currentWord : intermediateLongest;
  }, "");
  return longestWord.length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");


//Third way - using method sort()
function findLongestWordLength(str) {
  let longestWord = str.split(' ');
longestWord.sort(function(a, b) { 
  return b.length - a.length; 
});
  return longestWord[0].length;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

