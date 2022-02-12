//First way - with Number
function convertToF(celsius) {
  let fahrenheit = Number(celsius * (9/5)) + 32;
  return fahrenheit;
}
convertToF(30);


//Second way - with plus
function convertToF(celsius) {
  let fahrenheit = +(celsius * (9/5)) + 32;
  return fahrenheit;
}
convertToF(30);