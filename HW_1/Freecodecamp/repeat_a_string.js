//First way - using while
function repeatStringNumTimes(str, num) {
  let repeatedString = "";
  while (num > 0) {
    repeatedString += str;
    num--;
  }
  return repeatedString;
}
repeatStringNumTimes("abc", 3);


//Second way - using recursion
function repeatStringNumTimes(str, num) {
  if(num <= 0) 
    return "";
  if(num === 1) 
    return str;
  else 
    return str + repeatStringNumTimes(str, num - 1);
}
repeatStringNumTimes("abc", 3);


//Third way - using method repeat()
function repeatStringNumTimes(str, num) {
  if (num > 0)
    return str.repeat(num);
  else
    return "";
}
repeatStringNumTimes("abc", 3);
