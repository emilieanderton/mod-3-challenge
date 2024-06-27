// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  const employees = []

  while (true) { 
    let firstName = prompt ("Enter first name:");
    if (!firstName) break;

    let lastName = prompt ("Enter last name:");
    if (!lastName) break; 

    let salary = prompt ("Enter salary:");
    if (!salary) break;

    if (isNaN(salary) || salary <= 0) {
     confirm ('Not a valid salary, please enter correct salary!');
     continue;
      } 

      employees.push({firstName: firstName, lastName: lastName, salary: salary})
    }
    return employees
  }
  // TODO: Get user input to create and return an array of employee objects

// collectEmployees()

// Display the average salary
// let employees = []

const displayAverageSalary = function (employeesArray) {

  if (!Array.isArray(employeesArray) || employeesArray.length === 0) {
    console.log("No salaries provided.");
    return;
}

let total = 0;
for (let i = 0; i < employeesArray.length; i++) {
    total += employeesArray[i];
}

let averageSalary = total / employeesArray.length;
// Log the average salary without decimals
console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary}`);
};


  // TODO: Calculate and display the average salary



// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
