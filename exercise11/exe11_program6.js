// **Program 6: Mapping Country Codes to Country Names**  
//    - Build a `Map` where each entry’s key is a country code (e.g., `"IN"`, `"USA"`, `"FR"`) and the value is the country’s full name (e.g., `"India"`, `"United States of America"`, `"France"`).  
//    - Use a `for...of` loop (destructuring `[key, value]`) to iterate over the map.  
//    - Print or display each country code with its corresponding name.

let map = new Map()

map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')

for (const [key, value] of map) {
    console.log([key, value])
}