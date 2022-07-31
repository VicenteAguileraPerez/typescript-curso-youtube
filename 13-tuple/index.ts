let empId: number = 1;
let empName: string = "Steve";        

// Tuple type variable 
let employee: [number, string] = [1, "Steve"];

//tuple type with 3 values
let person: [number, string, boolean] = [1, "Steve", true];

//tuple type with 4 values
let user: [number, string, boolean, number, string];// declare tuple variable
user = [1, "Steve", true, 20, "Admin"];// initialize tuple variable

//array of tuples
let employees: [number, string][];
employees = [[1, "Steve"], [2, "Bill"], [3, "Jeff"]];

//push()
employee.push(2, "Bill"); 
console.log(employee); //Output: [1, 'Steve', 2, 'Bill']

// retrieving value by index and performing an operation 
employee[1] = employee[1].concat(" Jobs"); 
console.log(employee); //Output: [1, 'Steve Jobs']
