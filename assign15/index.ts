
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need tlo send out a new set of invitations.
 You’ll have to think of someone else to invite.*/
        
 var guestList:string[]=["Ali ","Arslan","Talha","Rizwan"];


//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let personWhoCannotCome:string="talha";
console.log(personWhoCannotCome);


//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guestList.splice(2,1,"Ahmad")
console.log(guestList);

//• Print a second set of invitation messages, one for each person who is still in your list.
for(let i=0;i<guestList.length;i++){
    console.log(`Mr.${guestList[i]} i am very glad to invite you on the dinner`)
}
console.log(guestList)