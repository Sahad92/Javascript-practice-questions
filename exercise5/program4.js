/*### 4. Inverted Pyramid

*Target Pattern:*  

*********
 *******
  *****
   ***
    *
*/

// const MAX=5;
// for (let i=1; i<=MAX; i++){  
//     // for(let j=1; j<i; j++){
//     //     process.stdout.write(".");
//     // }
//     // for(let k=5; k>=i; k--){
//     //     process.stdout.write("*");
//     // }
    

//     process.stdout.write("\n");
// }

const MAX=10;
for (let i=1; i<=MAX; i++){  
    for(let j=1; j<i; j++){
        process.stdout.write(".");
    }

    for(let k=1; k<=2*(MAX-i)+1; k++){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}