// Problem 9: Count Occurrences of an Element**

// Write a function `countOccurrences(arr, element)` that returns the number of times `element` appears in `arr`.

function countOccurrences(arr, element){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == element){
        count++
        }
    }
    console.log(count)
}

countOccurrences(arr = ["a","b","c","d","a","a"], "a")