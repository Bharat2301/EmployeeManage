import React, { useState } from 'react';
import './App.css';
import EmployeeForm from './component/Employeeform';
import EmployeeTable from './component/Employeetable';
import Modal from 'react-modal';

Modal.setAppElement('#root');  // To ensure proper accessibility

function App() {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employeeToEdit, setEmployeeToEdit] = useState(null);
  const [editedEmployee, setEditedEmployee] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    jobDescription: '',
    jobRole: '',
  });

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  const openModal = (index) => {
    const employee = employees[index];
    setEmployeeToEdit(index);
    setEditedEmployee({ ...employee });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEmployeeToEdit(null);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = () => {
    const updatedEmployees = [...employees];
    updatedEmployees[employeeToEdit] = editedEmployee;
    setEmployees(updatedEmployees);
    closeModal();
  };

  const deleteEmployee = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="App">
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeTable
        employees={employees}
        editEmployee={openModal}
        deleteEmployee={deleteEmployee}
      />

      {/* Modal for editing employee */}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Edit Employee">
        <h2>Edit Employee</h2>
        <form>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={editedEmployee.firstName}
              onChange={handleEditChange}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={editedEmployee.lastName}
              onChange={handleEditChange}
            />
          </div>
          <div>
            <label>Job Title:</label>
            <input
              type="text"
              name="jobTitle"
              value={editedEmployee.jobTitle}
              onChange={handleEditChange}
            />
          </div>
          <div>
            <label>Job Description:</label>
            <input
              type="text"
              name="jobDescription"
              value={editedEmployee.jobDescription}
              onChange={handleEditChange}
            />
          </div>
          <div>
            <label>Job Role:</label>
            <input
              type="text"
              name="jobRole"
              value={editedEmployee.jobRole}
              onChange={handleEditChange}
            />
          </div>
          <div>
            <button type="button" onClick={handleSaveEdit}>Save</button>
            <button type="button" onClick={closeModal}>Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default App;