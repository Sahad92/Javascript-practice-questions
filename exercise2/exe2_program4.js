/*Program 4:
Generate a random integer between 1 and 50. Then:
	•	Ask the user to guess the number.
	•	Provide feedback if the guess is too high or too low.
	•	Continue until the user guesses correctly.
	•	Count the number of attempts taken.

Topics covered: Math.random(), Math.floor(), comparison operators
*/
const prompt = require('prompt-sync')();

let count = 0;

function Random_integer(){

    do {
        const min = 1
        const max = 5
    
        let user_num = prompt("Guess the number: ");
        var num = Number(user_num)
    
        var random_number = (Math.floor(Math.random() * (max - min + 1)) + min)
        console.log(`Random generated number: ${random_number}`)

        if (num > random_number){
            console.log("Guess is too high")
        }
        else if(num < random_number){
            console.log("Guess is too low")
        }
        else{
            console.log("Guess is true")
        }
        count++
    }
    while(num != random_number)
    
    console.log("Number of attempts:",count);
    
}

Random_integer()
