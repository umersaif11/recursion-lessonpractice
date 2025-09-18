//Question: 01
//Write a function called sumRange. It will take a number and return 
// the sum of all numbers from 1 up to the number passed in.
function sumRange(n, total = 0) {
    if(n <= 0) {
        return total;
    } else {
        return sumRange(n - 1, total + n);
    }
}
//Question 2: Power function
//Write a function called power which takes in a base and an exponent. 
// If the exponent is 0, return 1.
function pow(base , exp) {
    if(exp === 0) {
        return 1;
    } else {
        return base * pow(base, exp - 1)
    }
}
//Question 3: Calculate factorial
//Write a function that returns the factorial of a number.
function factorial(n) {
    if(n === 1){
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
//Question 4: Check all values in an array
//Write a function called all which accepts an array and a 
// callback and returns true if every value in the array returns
//  true when passed as parameter to the callback function
function all(array, callback, i = 0) {
    if(i === array.length){
        return true;
    } else if(!callback(array[i])) {
        return false;
    } else {
        return all(array, callback, i + 1);
    }
}
//Question 5: Product of an array
//Write a function called productOfArray which takes in an array 
// of numbers and returns the product of them all
function productOfArray(array, i = 0){
    if(i === array.length){
        return 1;
    } else {
        return array[i] * productOfArray(array, i + 1);
    }

}
//Question 6: Search JS object
//Write a function called contains that searches for a value
//in a nested object. It returns true if the object contains that value.
function contains(object, value) {
  if(typeof object !== 'object' 
    || object === null){
    return false;
  };
  if(Object.values(object)
     .includes(value)){
    return true;
  }
    for(let prop in object){
        if(typeof object[prop] === 'object'){
            let found = contains(object[prop], value);
            if(found){
                return true;
            }
        }
    }
    return false;
}
// Question 7: Parse a multi-dimensional array
// Given a multi-dimensional integer array, return 
// the total number of integers stored inside this array
//var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
function totalIntegers(array, i = 0, total = 0){
    if(!Array.isArray(array[i]) && Number.isInteger(array[i])){
        total++;
        return total;
    } else if(Array.isArray(array[i])){
        return totalIntegers(array[i], i + 1, total);
    }
}
function totalnum(array){
    let total = 0;
    
    
}
var arr = [0, [[5], 3], 2, ['foo'], [], [4, [5, 6]],8,[7]];
console.log(totalnum(arr));

