"use strict";
//use of split
var namee = "once upon a time";
let split = namee.split("  ");
console.log(split);
let split1 = namee.split("n");
console.log(split1);
//use of slice           //is used to skip the element using index
let numbers = [1, 2, 3, 4, 5, 6];
let req = numbers.slice(4); //simple 4 is used to remove first four elements
console.log(req);
let try2 = numbers.slice(-4); //negative -4 is used to take written last 4 elements
console.log(try2);
