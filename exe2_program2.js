/*
Program 2:
Ask the user to enter a sentence. Perform the following:
	•	Find the length of the sentence.
	•	Find the index of the first occurrence of the word “JavaScript”.
	•	Extract a substring starting from the word “JavaScript” to the end of the sentence.
	•	Check if the sentence includes the word “developer”.

Topics covered: length, indexOf(), substring(), includes()*/


const prompt = require('prompt-sync')();

let user_sentence = prompt("Enter a sentence:");

let toUpperCase_sentence = user_sentence.toUpperCase();
let indexOf_javascript = (toUpperCase_sentence.indexOf('JAVASCRIPT'));

console.log(user_sentence.length);
console.log(indexOf_javascript);
console.log(user_sentence.substring(indexOf_javascript));
console.log(toUpperCase_sentence.includes('DEVELOPER'));