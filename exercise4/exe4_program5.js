/*5.	Nested Objects:
	•	Create an object company with properties:
		•	name (string)
		•	location (object with city and country as properties)
		•	departments (array of objects where each object has properties deptName and employeeCount).
	•	Write functions to:
		•	Add a new department to the departments array.
		•	Update the employeeCount of a specific department.
		•	Print all details of the company, including its departments.
*/

let Company = {
    name : "Abc",
    location : {
        city : "India",
        country : "Mumbai"
    },
    departments : [
        object1 = {
            deptName : "IT",
            employeeCount : 20
        },
        object2 = {
            deptName : "Sales",
            employeeCount : 10
        }
    ]
}

function companyDetails(){
    Company.departments.push(
        object3 = {
        deptName : "finance",
        employeeCount : 5
    })
    for (let object of Company.departments){
        if(object.deptName == "IT"){
            object.employeeCount = 18;
        }
    }

    console.log(Company);
}

companyDetails()