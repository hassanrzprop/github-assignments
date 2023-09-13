"use strict";
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["ali", "hassan", "Waqar", "zeeshan", "wakeel"];
var new_users = ["ali", "Noor", "wakeel", "Haider", "Arbaaz"];
function CheckingNames(current_users, new_users) {
    const username = current_users.map((user) => user.toLowerCase());
    for (const newuser of new_users) {
        const lwrcseNewusernam = newuser.toLowerCase();
        if (username.includes(lwrcseNewusernam)) {
            console.log(`your username ${newuser} is already taken`);
        }
        else {
            console.log(`your username ${newuser} is available`);
        }
    }
}
CheckingNames(current_users, new_users); // tried from youtube after the practice failed of 1.5days
