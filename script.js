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
console.log(productOfArray([]));

