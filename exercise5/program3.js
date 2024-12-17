/*
### 3. Centered Pyramid

*Target Pattern:*  

    *
   ***
  *****
 *******
*********
*/

const MAX=5;
for (let i=1; i<=MAX; i++){  
    for(let j=1; j<=(MAX-i); j++){
        process.stdout.write(".");
    }
    for(let k=1; k<=(i+i-1); k++){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}