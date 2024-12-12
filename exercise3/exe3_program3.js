// **Problem 3: Reverse an Array**

// Write a function `reverseArray(arr)` that takes an array and returns a new array with the elements in reverse order.


// function reverseArray(arr){
//     let new_Array = arr.reverse()
//     console.log(new_Array)

// }

// reverseArray(arr = [1,2,3,4,5])


//TODO: Do not use predefine method

function reverseArray1(arr){
    for(let i=arr.length-1;i >= 0;i--){
        console.log(arr[i])
    }
}
    
reverseArray1(arr = [1,2,3,4,5])
    
