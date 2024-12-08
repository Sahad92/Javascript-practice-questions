/*### **Problem 2: Find the Largest Number**

Write a function `findLargest(arr)` that returns the largest number in an array.*/


function findLargest(arr){

    let largest_num = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i]>largest_num){
            largest_num = arr[i];
        }
    }
    console.log(largest_num);
}

findLargest(arr = [1,2,3,4,5])