// **Problem 4: Remove Duplicates from an Array**

// Write a function `removeDuplicates(arr)` that removes duplicate elements from an array and returns a new array with unique elements.


// function removeDuplicates(arr){
//     let new_Array = new Set(arr)
//     console.log(new_Array)
// }

// removeDuplicates(arr = [1,1,2,3,4,5,5,5,5])


// TODO: do not use pre-define method

function removeDuplicates1(arr){
    let new_array = [];
    for (let i = 0; i < arr.length; i++) {
        if(new_array.includes(arr[i]) == false){
            new_array.push(arr[i])
        }
    }
    console.log(new_array)
}

removeDuplicates1(arr = [1,"a",1,2,3,5,5,"b",5,5,2,3,3,5,4,6,"a"])