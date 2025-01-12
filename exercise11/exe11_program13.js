// **Program 13: Temperature Transformation**  
//    - Have an array of temperatures in Celsius (e.g., `[0, 15, 30, 40]`).  
//    - Use **map** to convert each temperature from Celsius to Fahrenheit.  
//    - Then use **filter** to keep only the temperatures above a certain threshold (e.g., above 90°F).

let temperatures = [0, 15, 30, 40, 50]

let Fahrenheit = temperatures.map(temp => (temp * 9/5) + 32);
let high_temp = Fahrenheit.filter(a => a > 90)
console.log(high_temp)