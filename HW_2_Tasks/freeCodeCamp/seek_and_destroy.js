//First way - using spread operator
function destroyer(arr, ...valueToRemove) {
  return arr.filter(elem => !valueToRemove.includes(elem));
}




