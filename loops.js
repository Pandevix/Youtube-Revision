// let sum = 0;

// for(let i = 1; i <= 5; i++){
//     sum = sum + i;
//     console.log(sum);
// }



// for (var i = 1; i <= 5; i++){
//     console.log("i =" ,i);
// }

// console.log(i);
// console.log(i);

// i ko jab hum var mein dete hain naaa tb wo globally sbke paas hota hain even after exiting the block code
// of the for loop / loops isiliye upar wo bahar bhi print ho rha hai....     //  


// for (let i = 1; i <= 5; i++){
//     console.log("i =" ,i);
// }

// console.log(i);
// console.log(i);


// upar wala code false hain jo bahar clg ho rha hai wo undefined because yahan pe hum let ka use kr rhe hain



// while ( i < 5){
//     console.log(i);
//     i++;
// }



// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);


// do while loop kamse kam 1 baar toh chalega hi chaahe jo ho jaaye because condition last mein check hoti hain 


// Advanced Loops (for of)

// This loop is to be given on strings and arrays //


// let str = "Pandeys"
// let length = str.length
// console.log(length);


// for (let i of str ){
//     console.log(i);
// }


// For-in loop //

// let student = {
//     name: "Rahul",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true
// }

// for (let key in student ){
//     console.log("Key =", key ,"    value =", student[key]);
// }


// Practise Questions //  Chaampp ke


// Practise question 1 //

// for (let i = 0; i <= 100; i += 2) {
//     console.log("num =", i);
// }

// Practise Question 2 //

// let gameNum = 25;
// let userNum = prompt("Guess the game number")

// while(userNum != gameNum){
//     userNum = prompt("You entered the wrong number ,Guess again ")
// }

// console.log("Congratulations , You entered the right number");







// Strings //

// let str = "Mahesh";
// let length =str.length;

// console.log(str[0]);


// Practise quetsions //

let fullName = prompt("Enter your fullname without spaces");

let min = 100;
let max = 999;
let userNumber =Math.floor( Math.random() * (max-min+1) + min);
let userName = "@" + fullName + userNumber ;
console.log(userName);






