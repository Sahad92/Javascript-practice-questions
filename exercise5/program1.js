/*
### 1. Right-Aligned Triangle

*Target Pattern:*  

    *
   **
  ***
 ****
*****
*/

// const MAX = 5;
// for (let i=1; i<=MAX; i++){  
//     for(let j=1; j<=(MAX-i); j++){
//         process.stdout.write(".");
//     }
//     for(let k=1; k<=i; k++){
//         process.stdout.write("*");
//     }

//     console.log()
// }

// const MAX = 5;
// for (let i=1; i<=MAX; i++){

//     for(let j=5; j>=i; j--){
//         process.stdout.write("*");
//     }
//     for(let k=1;k<=i-1; k++){
//         process.stdout.write("#");
//     }
//     console.log()
// }


const MAX = 5;
for (let i=1; i<=MAX; i++){  
    process.stdout.write(" ".repeat(MAX-i));
    console.log("*".repeat(i));
}                                      