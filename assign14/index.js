"use strict";
/*
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least
 three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
 */
var guestList = ["Ali ", "Arslan", "Talha", "Rizwan"];
guestList.forEach((inviting) => console.log(`Mr.${inviting} I would like to invite you to attend the dinner which for the reunion of school friends`));
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need tlo send out a new set of invitations.
 You’ll have to think of someone else to invite.*/
//Now talha is out from the list and added ahmad
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let personWhoCannotCome = "talha";
console.log(personWhoCannotCome);
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guestList.splice(2, 1, "Ahmad");
console.log(guestList);
//• Print a second set of invitation messages, one for each person who is still in your list.
for (let i = 0; i < guestList.length; i++) {
    console.log(`Mr.${guestList[i]} i am very glad to invite you on the dinner`);
}
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