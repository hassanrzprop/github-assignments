"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "mian Muhammad Hassan raza";
//console.log(personName);
// lowercase name
let namInLower = personName.toLowerCase();
console.log(namInLower);
// uppercase name
let nameInUppercase = personName.toUpperCase();
console.log(nameInUppercase);
// name in the title case // it will be studied in Array topic
let array = personName.split(" ");
let titlecaseName = " ";
for (let i = 0; i < array.length; i++) {
    titlecaseName += array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase() + " ";
}
console.log(titlecaseName);
