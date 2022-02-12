//First way  - using method find()
function findElement(arr, func) {
  return arr.find(func);
}
findElement([1, 2, 3, 4], num => num % 2 === 0);


//Second way- using for
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
 }
  return undefined;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);
