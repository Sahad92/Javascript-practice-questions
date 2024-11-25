/*
Program 6:
Ask the user to enter their birth date in the format “YYYY-MM-DD”. Then:
	•	Create a Date object from the input.
	•	Calculate the user’s age in years.
	•	Determine the day of the week they were born.

Topics covered: new Date(), getFullYear(), getDay()
*/

const prompt = require('prompt-sync')();
let user_birthday = prompt("Enter your birthday in format “YYYY-MM-DD”: ");

const date_object = new Date(user_birthday);
let current_year = new Date()

console.log(date_object) 
// console.log(date_object.getFullYear())
// console.log(current_year.getFullYear())
console.log((current_year.getFullYear()) - (date_object.getFullYear()))
console.log(date_object.getDay())
