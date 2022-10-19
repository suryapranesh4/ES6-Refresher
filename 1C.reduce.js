var array = [1,2,3,4];

// 0 -> Initial value
const calculateSum = (arr) => arr.reduce((prevValue,currentValue) => prevValue + currentValue , 0); 

// 1 -> Initial value
const calculateProduct = (arr) => arr.reduce((prevValue,currentValue) => prevValue * currentValue , 1); 

console.log("Sum of Array -> (1,2,3,4) :",calculateSum(array));
console.log("Product of Array -> (1,2,3,4) :",calculateProduct(array));