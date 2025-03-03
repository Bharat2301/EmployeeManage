import React, { useState } from "react";

function EmployeeForm({ addEmployee }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobRole, setJobRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee({
      firstName,
      lastName,
      jobTitle,
      jobDescription,
      jobRole
    });
    // Reset form after submission
    setFirstName('');
    setLastName('');
    setJobTitle('');
    setJobDescription('');
    setJobRole('');
  };

  return (
    <div>
      <h1>Employee Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="firstName">
          <label>First Name: </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="lastName">
          <label>Last Name: </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="jobTitle">
          <label>Job Title: </label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div className="jobDescription">
          <label>Job Description: </label>
          <input
            type="text"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          />
        </div>
        <div className="jobRole">
          <label>Job Role: </label>
          <input
            type="text"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;