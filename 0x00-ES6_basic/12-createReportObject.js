export default function createReportObject(employeesList) {
  // The allEmployees property maps to the employeesList object
  const obj = {
	  [allEmployees] :(
		  getNumberOfDepartments(employeesList){
		  }
	return	  number of departments
		

  // The getNumberOfDepartments method returns the number of departments
   const getNumberOfDepartments = function() {
    return Object.keys(employeesList).length;
  };

  // Return an object with allEmployees and getNumberOfDepartments
  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
