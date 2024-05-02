interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
  }

const student1: Student = { firstName: "Alice", lastName: "Tobi", age: 20, location: "New York" };
const student2: Student = { firstName: "Bob", lastName: "Adesanya", age: 22, location: "Los Angeles" };

const studentsList: Student[] = [student1, student2];

function renderStudentRow(student: Student): HTMLElement {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  return row;
}

function renderTable(students: Student[]): void {
  const table = document.getElementById("studentTable");
  students.forEach(student => {
    const row = renderStudentRow(student);
    table?.appendChild(row);
  });
}
renderTable(studentsList);
