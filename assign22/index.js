"use strict";
//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var array = ["java", "javascript", "typescript", "HTML", "CSS"];
// to create an intentional error we need to create index greater than the array;
console.log(`Intentional error:${array[6]} `);
console.log(`Valid index:${array[4]}`);
