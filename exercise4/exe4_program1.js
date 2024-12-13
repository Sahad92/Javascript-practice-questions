/* 1.	Student Object:
	•	Create an object student with properties: name, age, grade, and subjects (an array of subject names).
	•	Write a function to:
		•	Update the grade.
		•	Add a new subject to the subjects.
		•	Print all the properties of the student object.*/

       

function studentDetails(){

    const Student = {
        name : "Abc",
        age : 21,
        grade : "A",
        subjects : ["C++", "Java", "Javascript"]
    } 

    Student.grade = "B"
    Student.subjects.push("python")
    console.log(Student)
}

studentDetails()
