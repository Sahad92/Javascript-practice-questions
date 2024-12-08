// **Problem 5: Merge Two Arrays**

// Write a function `mergeArrays(arr1, arr2)` that merges two arrays into one and returns the combined array.

function mergeArrays(arr1, arr2){
    let new_Array = arr1.concat(arr2)
    console.log(new_Array)
}

let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9,10]
mergeArrays(arr1, arr2)