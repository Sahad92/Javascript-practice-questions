/* **3. Array Filtering and Summation Function**  
**Goal:** Create a function that filters an array of numbers and returns the sum of all numbers greater than a given threshold.  
**Details:**  
- The function should accept two parameters:
  - An array of numbers.
  - A threshold number.
- Use array methods (like `filter()`) inside the function to determine which values meet the criteria.
- After filtering, sum the resulting values and return the sum.  
- Test with an array like `[10, 5, 20, 3, 15]` and a threshold of `10`.
*/

let arr = [10, 5, 20, 3, 15]
var threshold_num = 10


function filterArray(arr,threshold_num){
    let sum = 0;
    let new_arr = arr.filter((value) => value >= threshold_num)

    for(let i=0; i < new_arr.length; i++){
        sum = sum+new_arr[i]
    }
    console.log(new_arr)
    console.log(sum)
}
filterArray(arr,threshold_num)