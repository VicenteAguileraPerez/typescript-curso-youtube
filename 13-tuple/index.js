var empId = 1;
var empName = "Steve";
// Tuple type variable 
var employee = [1, "Steve"];
//tuple type with 3 values
var person = [1, "Steve", true];
//tuple type with 4 values
var user; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable
//array of tuples
var employees;
employees = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];
//push()
employee.push(2, "Bill");
console.log(employee); //Output: [1, 'Steve', 2, 'Bill']
// retrieving value by index and performing an operation 
employee[1] = employee[1].concat(" Jobs");
console.log(employee); //Output: [1, 'Steve Jobs']
