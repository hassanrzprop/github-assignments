"use strict";
/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.*/
var guestList = ['waqar', 'Ali ', 'haider', 'Arslan', 'Ahmad', 'Rizwan', 'Kashif'];
/*• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.*/
guestList.splice(0, 2);
guestList.forEach((reason) => console.log(`MR.${reason} I am sorry,I cannot nvite you on the dinner due t time managment`));
guestList.splice(0, 0, "Waqar", "Ali");
for (let i = guestList.length; 2 < i; i--) {
    guestList.pop();
}
console.log(guestList);
/*• Print a message to each of the two people still on your list, letting them know they’re still invited.*/
guestList.forEach((aspect) => console.log(`${aspect} you are still invited`));
/*• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/ guestList.splice(0, 2);
console.log(guestList);
