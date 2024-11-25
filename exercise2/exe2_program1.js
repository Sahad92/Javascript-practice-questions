/*Program 1:
Write a function that takes a user’s full name as input. Perform the following operations:
	•	Remove any leading and trailing whitespaces.
	•	Convert the full name to uppercase letters.
	•	Replace any occurrence of the word “JUNIOR” with “JR”.
	•	Split the full name into an array of first name and last name.
	•	Return the transformed name and the array.

Topics covered: trim(), toUpperCase(), replace(), split()*/

const prompt = require('prompt-sync')();

function full_name(name){
    // console.log(name);
    // console.log(name.trim());
    // console.log(name.trim().toUpperCase());
    // console.log(name.trim().toUpperCase().replace('JUNIOR', 'JR'));
    // console.log(name.trim().toUpperCase().replace('JUNIOR', 'JR').split(" "));

    var temp_name = name;
    
    name = name.trim();
    console.log(name);

    name = name.toUpperCase();
    console.log(name);

    name = name.replace('JUNIOR', 'JR');
    console.log(name);

    name = name.split(" ");
    console.log(name);

    // Original name - {original name} og_name
    // Processed name - {processed name} name

    return name;
}

let user_name = prompt("Enter your full name: ");
full_name(user_name)
