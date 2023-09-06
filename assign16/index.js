"use strict";
var guestList = ['Ali ', 'Arslan', 'Ahmad', 'Rizwan'];
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
guestList.unshift("waqar");
// • Add one new guest to the middle of your array. 
guestList.splice(guestList.length / 2, 0, "haider");
//• Use append() to add one new guest to the end of your list.
guestList.push("Kashif");
//  • Print a new set of invitation messages, one for each person in your list.
guestList.forEach(element => console.log(`MR ${element} I am very to invite you on the dinner`));
console.log(guestList);
