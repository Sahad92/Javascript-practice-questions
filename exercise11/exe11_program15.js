// **Program 15: User Names Conversion**  
//    - Have an array of user names (strings).  
//    - Use **map** to transform each name into an object that includes the original name and its length, such as `{ name: 'Alice', length: 5 }`.  
//    - Then use **filter** to exclude names shorter than a given length or that don’t meet certain criteria.

let names = ["one", "two", "three", "four"]

let transform_name = names.map((name) => ({
    name : name,
    length : name.length
}))
// console.log(transform_name)

let filtered_name = transform_name.filter(name_length => name_length.length > 3)
console.log(filtered_name)
