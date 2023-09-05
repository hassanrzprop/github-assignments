//use of split
var namee:string="once upon a time";
let split:string[]=namee.split("  ")
console.log(split)
let split1:string[]=namee.split("n")
console.log(split1)



//use of slice           //is used to skip the element using index
let numbers:number[]=[1,2,3,4,5,6];
let req=numbers.slice(4)       //simple 4 is used to remove first four elements
console.log(req)
let try2=numbers.slice(-4)    //negative -4 is used to take written last 4 elements
console.log(try2)



var insiName:string="work shall be supported";
var supName:string[]=insiName.split(" ")
var titlecase:string=" ";
for(let x=0;x<supName.length;x++){
    titlecase+=supName[x].charAt(0).toUpperCase()+supName[x].slice(1).toLowerCase()
}
console.log(titlecase)