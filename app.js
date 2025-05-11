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

// Question no 6: Write a program to check whether an alphabet is a vowel or consonant.

// let alphabet = "q";

// if (alphabet == "a" || alphabet == "e" || alphabet == "i" || alphabet == "o" || alphabet == "u") {
//     console.log("this alphabet is vowel");
// } else {
//     console.log("this alphabet is constant");
// }


// Question no 7: Write a program to calculate and print an electricity bill for a customer with:- 'customerId', 'name', 'unitsConsumed',- Charges:- Up to 199 units -> Rs. 1.20/unit,- 200-399 -> Rs. 1.50/unit,- 400-599 -> Rs. 1.80/unit,- >=600 -> Rs. 2.00/unit.
//  Test Data:- 'id: 1001', 'name: "James"', 'units: 800'.



// let customerId = 1001;
// let customerName = "Mohib";
// let consumedUnits = 800;

// let perUnitPrice;

// if (consumedUnits > 0 && consumedUnits < 200) {
//     perUnitPrice = 1.20;
// } else if (consumedUnits >= 200 && consumedUnits < 400) {
//     perUnitPrice = 1.50;
// } else if (consumedUnits >= 400 && consumedUnits < 600) {
//     perUnitPrice = 1.80;
// } else {
//     perUnitPrice = 2.00;
// }

// let totalPrice = consumedUnits * perUnitPrice;

// console.log("Customer ID Number : " + customerId);
// console.log("Customer Name : " + customerName);
// console.log("Total Units : " + consumedUnits);
// console.log("Amount Charges @Rs. " + perUnitPrice.toFixed(2) + " per Unit : Total Amount : " + totalPrice.toFixed(2));
// console.log("Net Bill Amount : " + totalPrice.toFixed(2)); 


//  Question no 8. Write a JavaScript program which computes the average marks of the
//  following students Then, this average is used to determine the corresponding
//  grade.

// let englishMarks = +prompt("Enter Your English Marks");
// let mathMarks = +prompt("Enter Your Math Marks");
// let urduMarks = +prompt("Enter Your Urdu Marks");
// let islamiyatMarks = +prompt("Enter Your Islamiyat Marks");

// let totalNumber = englishMarks+mathMarks+urduMarks+islamiyatMarks;

// let gradePercentage = totalNumber / 400 * 100;

// if (gradePercentage < 60) {
//     console.log("Your Grade is E And Your percentage is " +gradePercentage);
// } else if(gradePercentage < 70){
//     console.log("Your Grade is D And Your percentage is " +gradePercentage);
// }else if(gradePercentage < 80){
//     console.log("Your Grade is C And Your percentage is " +gradePercentage);
// }else if(gradePercentage < 90){
//     console.log("Your Grade is B And Your percentage is " +gradePercentage);
// }else if(gradePercentage <= 100){
//     console.log("Your Grade is A And Your percentage is " +gradePercentage);
// }else{
//     console.log("SOmthing is wrong");
// }


// Question no 9: 
//  Check if a number is even or odd. If even, check if divisible by 5. If odd, check if divisible by 7.


// let number = 29493;
// if (number % 2 == 0) {
//     if (number % 5 == 0) {
//         console.log("this number $number is even and divisible by 5");
//     } else {
//         console.log("this number $number is even and not divisible by 5");
//     }
// } else {
//     if (number % 7 == 0) {
//         console.log("this number $number is odd and divisible by 7");
//     } else {
//         console.log("this number $number is odd and not divisible by 7");
//     }
// }
