// **Program 11: Converting Object Properties to Uppercase**  
//    - Create an array of objects, each with properties like `languageName` and `languageFileName`.  
//    - Use `forEach` to iterate through this array.  
//    - For each object, transform the `languageName` into uppercase and log or store the result.


let languages = [
    {
        javascript : "js",
        python : "py",
    },
    {
        c : "c",
        cpp : "cpp"
    }
]

languages.forEach(element => {
    console.log(String(Object.keys(element)).toUpperCase())
});