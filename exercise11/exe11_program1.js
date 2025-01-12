// ## **Program 1: Custom Multiplication Table with Conditions**

// ### **Description**
// - You need to print a multiplication table for numbers from 1 to 5.
// - For each row (representing the multiplication by \( i \)), print the product of \( i \) with values of \( j \) from 1 to 10.
// - If the multiplication result is **exactly 25**, you should print a message like `"We got 25, skipping!"` and skip printing the remainder of that row (using `continue` or a control structure of your choice).
 

function multiplication(){
    for(let i = 1; i < 6; i++){
        for (let j = 1; j < 11; j++) {

            if(i*j == 25){
                console.log("We got 25, skipping!")
                continue 
            }      
            console.log(`${i} x ${j} = ${i*j}`)
        }

        console.log("-------------")
    }
}

multiplication()
