export default function createReportObject(employeesList) {
  // Create an object containing all employees by department
  const allEmployees = { ...employeesList };

  // Define the getNumberOfDepartments method
  const getNumberOfDepartments = (allEmployees) => Object.keys(allEmployees).length;

  // Return an object with allEmployees and getNumberOfDepartments method
  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
