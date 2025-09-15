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