// ## **Program 3: Print Even Numbers Using `while`**

// ### **Description**
// - Use a `while` loop to print the even numbers between 1 and 20 (inclusive).
// - You’ll start from `1` and increment your counter in each iteration.
// - Whenever you find an even number, print it.

let i = 1;

while (i < 21) {
    if(i%2 == 0){
        console.log(i)
    }
    i++
}