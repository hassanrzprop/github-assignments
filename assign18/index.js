"use strict";
/*
Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.*/
var favouriteLocation = ["London", "Naran City", "Faisalabad", "Swat", "Manshera", "Abtabad"];
// • Print your array in its original order.
console.log(`actual array`);
console.log(favouriteLocation);
// • Print your array in alphabetical order without modifying the actual list.
/* var array:string[]=[]
array=favouriteLocation.sort();*/ //
// * method No 2
console.log("\n alphabetical order");
console.log([...favouriteLocation].sort());
// • Show that your array is still in its original order by printing it.
console.log("Actual array");
console.log(favouriteLocation);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Opposite alphabatical order");
var reveredArray = [...favouriteLocation].sort().reverse();
console.log(reveredArray);
// • Show that your array is still in its original order by printing it again.
console.log("actual array");
console.log(favouriteLocation);
// • Reverse the order of your list. Print the array to show that its order has changed.
favouriteLocation.reverse();
console.log("reversed array", favouriteLocation);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
favouriteLocation.reverse();
console.log("Original array", reveredArray);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
favouriteLocation.sort();
console.log(favouriteLocation);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
favouriteLocation.reverse();
console.log(favouriteLocation);
