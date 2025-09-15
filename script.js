//Question: 01
//Write a function called sumRange. It will take a number and return 
// the sum of all numbers from 1 up to the number passed in.
// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.
function sumRange(n, total = 0) {
    if(n <= 0) {
        return total;
    } else {
        return sumRange(n - 1, total + n);
    }
}
