// **Program 8: Uppercasing Object Values**  
//    - Have an object with several key-value pairs representing items, such as programming language shortcuts and their full names.  
//    - Use a `for...in` loop to iterate through the object.  
//    - Convert each value (the language name) to uppercase.  
//    - Display or log each key with its newly uppercased value.

let languages = {
    JS : "javascript",
    PY : "python",
    JAVA : "java",
}

for (const key in languages) {
    const element = languages[key].toUpperCase()
    console.log(element)
}