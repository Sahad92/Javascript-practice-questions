// Problem 7: Find the Index of an Element**

// Write a function `findIndex(arr, element)` that returns the index of the first occurrence of `element` in `arr`, or `-1` if it is not found.

function findIndex(arr, element){
    let new_Array = arr.indexOf(element)
    console.log(new_Array)
}

findIndex(arr = ["a","b","c","d"], "a")