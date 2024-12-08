// **Problem 8: Flatten a Nested Array**

// Write a function `flattenArray(arr)` that flattens a nested array by one level.

function flattenArray(arr){
    let new_Array = arr.flat()
    console.log(new_Array)
}

flattenArray(arr = [1, 2, 3, [4, 5, [6, 7, 8] ], 9, 10])