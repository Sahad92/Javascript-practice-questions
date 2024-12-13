/*4.	Employee Record:
	•	Create an object employee with properties: id, name, position, salary, and isActive.
	•	Write functions to:
		•	Activate or deactivate the employee (isActive).
		•	Increase the salary by a given percentage.
		•	Display the employee’s details.*/

function employeeRecord(){

    const Employee = {
        name : "Abc",
        position : "devloper",
        salary : 50000,
        isActive : "deactivate"
    } 
    Employee.isActive = "activate"
    Employee.salary = (Employee.salary + (Employee.salary*30)/100)
    // console.log(Employee.salary)
    console.log(Employee)

}

employeeRecord()

