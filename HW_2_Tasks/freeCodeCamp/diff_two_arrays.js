//First way - common array - using methods filter() and indexOf()
let arr1 = [1, 2, 3, 5];
let arr2 = [1, 2, 3, 4, 5];

let commonArray = arr1.filter(function(obj) {
   return arr2.indexOf(obj) >= 0; 
  });
//console.log(commonArray);  //[1, 2, 3, 5];


//Second way - different array - using methods filter() and indexOf()
function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2,arr1)];

  function diff(a, b) {
    return a.filter(n => b.indexOf(n) === -1);
  }
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))   // [4]



