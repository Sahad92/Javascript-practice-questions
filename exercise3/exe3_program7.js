// Problem 7: Find the Index of an Element**

// Write a function `findIndex(arr, element)` that returns the index of the first occurrence of `element` in `arr`, or `-1` if it is not found.

// function findIndex(arr, element){
//     let new_Array = arr.indexOf(element)
//     console.log(new_Array)
// }

// findIndex(arr = ["a","b","c","d"], "a")


//TODO: without pre-define method

function findIndex1(arr, element){

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == element){
            console.log(i);
        }         
    }
}

findIndex1(arr = ["a","b","c","d"], "c")

