//First way - using methods Math.max() and Math.min()
function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let intermediateResult = 0;
  for (let i = min; i <= max; i++) {
    intermediateResult += i;
  }
  return intermediateResult;
}
sumAll([1, 4]);



//Second way - using method reduce()   //You have to point all digits in array!!!
let arr = [1, 2, 3, 4];

let result = arr.reduce(function(sum, elem) {
	return sum + elem;
}, 0);

