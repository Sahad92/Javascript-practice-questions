/* Program 7:

Create a program that:
	•	Current Date and Time: Gets the current date and time using new Date().
	•	String Conversion:
	•	Converts the date to a string using toString().
	•	Converts the date to a locale-specific string using toLocaleString().
	•	Type Determination: Determines the data type of the date object using typeof.
	•	Specific Date Objects:
	•	Creates a date object for January 23, 2023, using new Date(2023, 0, 23).
	•	Creates a date object with specific time using new Date(2023, 0, 23, 5, 3).

Topics covered: new Date(), toString(), toLocaleString(), typeof, date constructors
*/

let current_date = new Date()
console.log(current_date.toString());

let date1 = new Date()
str =  date1.toString()
console.log(typeof date1)
console.log(typeof str)
console.log(date1.toLocaleString())

let date2 = new Date(2023, 0, 23)
// console.log(typeof date2)
const options = {
    month : 'long',
    day : 'numeric',
    year : 'numeric',
}

console.log(date2.toLocaleDateString("en-US", options))

let date3 = new Date(2023, 0, 23, 5, 3)
const options2 = {
    month : 'long',
    day : 'numeric',
    year : 'numeric',
    hour : '2-digit',
    minute : '2-digit',
    second : '2-digit',
}
console.log(date3.toLocaleDateString("en-US", options2))