//First way - using method slice() with negative value
function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}
confirmEnding("Bastian", "n");
