//First way - using methods split(), join(), toLowerCase()
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
spinalCase('This Is Spinal Tap');
