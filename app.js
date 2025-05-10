// QUESTION NO 1: Create two integer variables length and breadth, assign values, then check if they are square values or rectangle values. If both values are equal, it’s a square; otherwise, it’s a rectangle.

// let length = 9;
// let breadth = 10;

// if (length === breadth) {
//     console.log("Its a Square");
// }else{
//     console.log("Its a rectangle");
// }

// QUESTION NO 2: Take two variables storing ages, then use if/else to determine the oldest and youngest among them.

// let userOne = 30;
// let userTwo = 30;

// if (userOne > userTwo) {
//     console.log("user one is oldest");
// }else if(userTwo > userOne){
//     console.log("user Two is oldest");
// }else{
//     console.log("Both are equal");
// }

// Question no 3: A student will not be allowed to sit in the exam if their attendance is less than 75%. Create integer variables:

// classesHeld = 16,

// classesAttended = 10,
// then calculate and print the attendance percentage. Determine if the student is allowed to sit in the exam.


// let classesHeld = 16;
// let classesAttended = 10;

// let percentOfClass = classesAttended/classesHeld * 100;

// if (percentOfClass <= 75) {
//     console.log("YOU ARE NOT ALLOWED IN EXAM");
//     console.log("Your percentage of Classes is " + percentOfClass);
// }else{
//     console.log("YOU ARE ALLOWED IN EXAM");
// }



// QUestion no 4: create an integer variable 'year' and assign any year to it. Check if it's a leap year:- If divisible by 4 -> leap year,- If it's a century year (e.g., 2000, 1900), it must be divisible by 400.

// let year = 300;

// if (year % 4 === 0 && year % 100 === 0 || (year % 400 === 0)) {
//     console.log("its a leap year");
// }else{
//     console.log("this is not a leap year")
// }

// Question no 5: Write a program that reads a temperature in Celsius ('temperature = 42') and displays a message:- < 0 -> Freezing weather,- 0-10 -> Very Cold weather,- 10-20 -> Cold weather,- 20-30 -> Normal,- 30-40 -> Hot,- >=40 -> Very Hot

// let temprature = 22;

// if (temprature >= 40) {
//     console.log("it is very hot weather");
// } else if (temprature < 40 && temprature >= 30) {
//     console.log("it is hot weather");
// } else if (temprature < 30 && temprature >= 20) {
//     console.log("it is normal weather");
// } else if (temprature < 20 && temprature >= 10) {
//     console.log("it is cold weather");
// } else if (temprature < 10 && temprature >= 0) {
//     console.log("it is very cold weather");
// } else {
//     console.log("freezing weather");
// }