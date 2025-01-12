// **Program 16: Exam Scores Processing**  
//    - Create an array of numeric exam scores (e.g., `[55, 73, 91, 64, 88]`).  
//    - Use **map** to apply a curve or add bonus points to each score.  
//    - Then use **filter** to select only the scores that exceed the passing mark (e.g., 70).


let score = [55, 73, 91, 64, 88]

let bonus_point = score.map( a => a+5)
// console.log(bonus_point)

let high_score = bonus_point.filter(stu_score => stu_score > 70)
console.log(high_score)
