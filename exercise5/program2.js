/*
### 2. Left-Aligned Triangle
*Target Pattern:*  

*
**
***
****
*****
*/

// for (let i=0; i<5; i++){  
//     for(let j=0; j<=i; j++){
//         process.stdout.write("* ");
//     }
//     console.log()
// }


for (let i=1; i<=5; i++){  
    let result = "*".repeat(i);
    console.log(result);
}