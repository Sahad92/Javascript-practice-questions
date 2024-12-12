// **Problem 10: Filter Out Falsy Values**

// Write a function `filterFalsy(arr)` that removes all falsy values (`false`, `0`, `""`, `null`, `undefined`, `NaN`) from an array.


function filterFalsy(arr){
    let new_Array = [];

    for (let i = 0; i < arr.length; i++){
        if(!arr[i])
            continue

        new_Array.push(arr[i])
    }
    console.log(new_Array)
}

filterFalsy(arr = ["a","b","c","d","a",false,0,"",null,undefined,NaN])

