/*
Program 5:
Write a program that:
	•	Gets the current date and time.
	•	Formats the date as “Weekday, Month Day, Year”.
	•	Calculates and displays the number of milliseconds since January 1, 1970.

Topics covered: new Date(), toDateString(), getTime()
*/

let date = new Date()
console.log(date.toDateString());


const options = {
    weekday : 'long',
    day : 'numeric',
    month : 'long',
    year : 'numeric',
}
console.log(date.toLocaleDateString("en-IN", options))


let date1 = new Date("03-25-2003")
let total_milliseconds = Date.now()

console.log(total_milliseconds);
console.log(date1.getTime());
