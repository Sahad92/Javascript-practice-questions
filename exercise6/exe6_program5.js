/***5. Date Processing Function**  
**Goal:** Create a function that takes a `Date` object and returns a formatted date string.  
**Details:**  
- The function should accept a `Date` object as a parameter.
- Inside the function, extract the month, day, and year using `getMonth()`, `getDate()`, and `getFullYear()`.
- Format the date into a string like `"January 23, 2023"`. (Hint: create an array of month names)
- Test the function by passing a `new Date()` object or a fixed date like `new Date(2023, 0, 23)`.
*/

let date1 =new Date(2023, 0, 23)

function dateProcessing(date1){
    console.log(date1.getMonth())
    console.log(date1.getDate())
    console.log(date1.getFullYear())

    months = ["january","february","march","april","may","june","july","august","september","october","november","december"],
    console.log(`${months[date1.getMonth()]} ${date1.getDate()}, ${date1.getFullYear()}`)

}
dateProcessing(date1)