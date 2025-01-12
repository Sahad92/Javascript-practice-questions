## **Program 1: Custom Multiplication Table with Conditions**

### **Description**
- You need to print a multiplication table for numbers from 1 to 5.
- For each row (representing the multiplication by \( i \)), print the product of \( i \) with values of \( j \) from 1 to 10.
- If the multiplication result is **exactly 25**, you should print a message like `"We got 25, skipping!"` and skip printing the remainder of that row (using `continue` or a control structure of your choice).
 
---

## **Program 2: Filtering Array Values and Breaking**

### **Description**
- You have an array of numbers (e.g., `[2, 3, 5, 7, 10, 15, 20, 25, 30]`).
- You want to loop through each number in the array and:
  1. **Skip** printing the number if it’s divisible by `3` (use `continue`).
  2. **Stop** the entire loop if the number is greater than `20` (use `break`).
  3. Otherwise, just print the number.


---

## **Program 3: Print Even Numbers Using `while`**

### **Description**
- Use a `while` loop to print the even numbers between 1 and 20 (inclusive).
- You’ll start from `1` and increment your counter in each iteration.
- Whenever you find an even number, print it.

---

## **Program 4: User Input Simulation Using `do...while`**

### **Description**
- Use a `do...while` loop to simulate repeatedly asking a user for input until they type `"stop"`.
- Since we’re simulating, you can store inputs in an array (e.g., `["hello", "test", "stop"]`) to mimic user responses.
- Print each input as it’s “entered,” and once you detect `"stop"`, exit the loop.


**Program 5: Counting Vowels in a String**  
   - Create a string (e.g., `"Hello World!"`) and use a `for...of` loop to iterate through each character.  
   - Check whether each character is a vowel (a, e, i, o, u).  
   - Keep a count of the total vowels encountered.  
   - Finally, display the count of vowels after the loop finishes.

**Program 6: Mapping Country Codes to Country Names**  
   - Build a `Map` where each entry’s key is a country code (e.g., `"IN"`, `"USA"`, `"FR"`) and the value is the country’s full name (e.g., `"India"`, `"United States of America"`, `"France"`).  
   - Use a `for...of` loop (destructuring `[key, value]`) to iterate over the map.  
   - Print or display each country code with its corresponding name.

**Program 7: Creating an Array of Object Entries**  
   - Declare an object with key-value pairs representing items or properties (e.g., game names).  
   - Convert the object into an array of `[key, value]` pairs (using a suitable built-in method).  
   - Use a `for...of` loop to iterate over these pairs.  
   - Show or process each key and value (such as printing them or adding them to another data structure).

**Program 8: Uppercasing Object Values**  
   - Have an object with several key-value pairs representing items, such as programming language shortcuts and their full names.  
   - Use a `for...in` loop to iterate through the object.  
   - Convert each value (the language name) to uppercase.  
   - Display or log each key with its newly uppercased value.

**Program 9: Filter Array Elements**  
   - Define an array of programming languages or any items.  
   - Use a `for...in` loop to iterate through the array indices.  
   - For each element, check if it meets a certain condition (e.g., contains the letter `"j"`).  
   - If it does, display or collect it; if not, ignore it.


**Program 10: Counting the Total Length of Strings**  
   - Have an array of strings (e.g., programming language names).  
   - Use `forEach` to iterate over the array, and for each item, add its length to a running total.  
   - Display or print the final total after the loop completes.

**Program 11: Converting Object Properties to Uppercase**  
   - Create an array of objects, each with properties like `languageName` and `languageFileName`.  
   - Use `forEach` to iterate through this array.  
   - For each object, transform the `languageName` into uppercase and log or store the result.

**Program 12: Collecting Items Based on a Condition**  
   - Have an array of strings or objects.  
   - Use `forEach` to check each element against a condition (e.g., “language names that start with ‘j’”).  
   - Collect the matching items into a separate array or list and display that list at the end.


**Program 13: Temperature Transformation**  
   - Have an array of temperatures in Celsius (e.g., `[0, 15, 30, 40]`).  
   - Use **map** to convert each temperature from Celsius to Fahrenheit.  
   - Then use **filter** to keep only the temperatures above a certain threshold (e.g., above 90°F).

**Program 14: Product Discount and Filtering**  
   - Suppose you have an array of product objects with properties like `name`, `price`, and `category`.  
   - Use **map** to apply a discount (e.g., reduce each product’s price by 10%).  
   - Use **filter** to retrieve only the discounted products that are still above a certain price point.

**Program 15: User Names Conversion**  
   - Have an array of user names (strings).  
   - Use **map** to transform each name into an object that includes the original name and its length, such as `{ name: 'Alice', length: 5 }`.  
   - Then use **filter** to exclude names shorter than a given length or that don’t meet certain criteria.

**Program 16: Exam Scores Processing**  
   - Create an array of numeric exam scores (e.g., `[55, 73, 91, 64, 88]`).  
   - Use **map** to apply a curve or add bonus points to each score.  
   - Then use **filter** to select only the scores that exceed the passing mark (e.g., 70).

**Program 17: Employee Records Analysis**  
   - Imagine an array of employee objects with properties such as `name`, `department`, and `salary`.  
   - Use **map** to format each record, for instance, combining `name` and `department` into a single string (e.g., `"Alice - Finance"`).  
   - Use **filter** to find employees who earn above a certain salary or who belong to a specific department.