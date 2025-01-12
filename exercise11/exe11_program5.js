// **Program 5: Counting Vowels in a String**  
//    - Create a string (e.g., `"Hello World!"`) and use a `for...of` loop to iterate through each character.  
//    - Check whether each character is a vowel (a, e, i, o, u).  
//    - Keep a count of the total vowels encountered.  
//    - Finally, display the count of vowels after the loop finishes.


str = "hello world"
let vowel = 0;
arr = ['a','e','i','o','u']
for (const element of str) {
    if(arr.includes(element)){
        vowel ++
    }

}
console.log(vowel)