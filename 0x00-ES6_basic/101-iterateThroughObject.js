export default function iterateThroughObject(reportWithIterator) {
 let employeeNames = [];

 // Iterate over each department in the reportWithIterator object
 for (let department in reportWithIterator) {
    // For each department, iterate over the array of employee names
    for (let employee of reportWithIterator[department]) {
      employeeNames.push(employee);
    }
 }

 // Join the employee names with ' | ' and return the resulting string
 return employeeNames.join(' | ');
}

