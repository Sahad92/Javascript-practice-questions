// **Problem 4: Remove Duplicates from an Array**

// Write a function `removeDuplicates(arr)` that removes duplicate elements from an array and returns a new array with unique elements.


function removeDuplicates(arr){
    let new_Array = new Set(arr)
    console.log(new_Array)
}

removeDuplicates(arr = [1,1,2,3,4,5,5,5,5])