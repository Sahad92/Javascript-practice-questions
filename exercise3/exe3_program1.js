// ### **Problem 1: Sum of Array Elements**

// Write a function `sumArray(arr)` that takes an array of numbers and returns the sum of all the elements.

// function sumArray(arr){
//     const Total = arr.reduce( (acc, currentvalue) => acc+currentvalue, 0)
//     console.log(Total);
// }


// sumArray(arr = [1,2,3,4,5])


//TODO: Write without any predefine methods
function sumArray2(arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += arr[i]
        
    }
    console.log(count)
}

sumArray2(arr = [1,2,3,4,5,6])