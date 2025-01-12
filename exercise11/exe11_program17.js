// **Program 17: Employee Records Analysis**  
//    - Imagine an array of employee objects with properties such as `name`, `department`, and `salary`.  
//    - Use **map** to format each record, for instance, combining `name` and `department` into a single string (e.g., `"Alice - Finance"`).  
//    - Use **filter** to find employees who earn above a certain salary or who belong to a specific department.

let array = [
    {
        name : "A",
        department : "Sales",
        salary : 10000
    },
    {
        name : "B",
        department : "Account",
        salary : 12000
    }
]

let format_record = array.map( (i) => (
    (i.name).concat("-",i.department)
))
console.log(format_record)

// let filtered = array.filter(a => a.salary > 10000)
let filtered = array.filter(a => a.department > "Account")
console.log(filtered)
