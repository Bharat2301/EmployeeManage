import React from 'react';

function EmployeeTable({ employees, editEmployee, deleteEmployee }) {
  return (
    <div>
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Job Title</th>
            <th>Job Description</th>
            <th>Job Role</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.jobTitle}</td>
              <td>{employee.jobDescription}</td>
              <td>{employee.jobRole}</td>
              <td><button onClick={() => editEmployee(index)}>Edit</button></td>
              <td><button onClick={() => deleteEmployee(index)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;