"use strict";
// interface for employee 
// get all employee
// add employee
// update employee info by id 
// remove employee
// search employee info by id
let employee = require('./employee.json');
const fs = require('fs/promises');
const readline = require('readline');
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
async function addEmployee(emp) {
    employee.push(emp);
    await fs.writeFile('./employee.json', JSON.stringify(employee));
}
function getAllEmployee() {
    return employee;
}
async function updateEmployee(id, change) {
    let emp = employee.find((emp) => emp.id === id);
    if (emp) {
        Object.assign(emp, change);
        await fs.writeFile('./employee.json', JSON.stringify(employee));
    }
}
async function deleteEmployee(id) {
    employee = employee.filter((emp) => emp.id !== id);
    await fs.writeFile('./employee.json', JSON.stringify(employee));
}
function input() {
    read.question('Choose option:\n1. Add\n2. Get All\n3. Update\n4. Delete\n', (choice) => {
        if (choice === '1') {
            // get all the info name salary id department
            read.question('Enter Employee ID: ', (id) => {
                read.question('Enter Employee Name: ', (name) => {
                    read.question('Enter Department: ', (department) => {
                        read.question('Enter Salary: ', (salary) => {
                            const emp = {
                                id: Number(id),
                                name,
                                department,
                                salary: Number(salary)
                            };
                            addEmployee(emp);
                            console.log('Employee Added Successfully');
                            read.close();
                        });
                    });
                });
            });
        }
        else if (choice === '2') {
            console.log(getAllEmployee());
            read.close();
        }
        else if (choice === '3') {
            read.question('Enter Employee ID: ', (id) => {
                read.question('What to update? (name/department/salary): ', (field) => {
                    read.question('Enter new value: ', (value) => {
                        let change = {};
                        if (field === 'name') {
                            change.name = value;
                        }
                        else if (field === 'department') {
                            change.department = value;
                        }
                        else if (field === 'salary') {
                            change.salary = Number(value);
                        }
                        updateEmployee(Number(id), change);
                        console.log('Employee Updated');
                        read.close();
                    });
                });
            });
        }
        else if (choice === '4') {
            read.question('Give employee id', (value) => {
                deleteEmployee(Number(value));
                console.log('Deleted successfully');
                read.close();
            });
        }
    });
}
input();
