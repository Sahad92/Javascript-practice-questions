// **Problem 6: Check if an Array is Sorted**

// Write a function `isSorted(arr)` that returns `true` if the array is sorted in ascending order, and `false` otherwise.

function isSorted(arr){

    sorted_arr = [...arr];
    new_array = sorted_arr.sort()

    console.log("Orignal array=",arr)
    console.log("Sorted array=",new_array)

    for (let i = 0; i < arr.length; i++){
        if(arr[i] != new_array[i]){
            return false
        }
    }
    return true
}

console.log(isSorted(arr = ["xyz","pqr","abc"]))
console.log(isSorted(arr = ["a","b","c"]))
