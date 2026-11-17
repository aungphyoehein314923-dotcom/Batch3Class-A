"use client";

import { useState } from "react";

export default function StudentManagement() {

  // 1. Store Student Data
  const [students, setStudents] = useState([]);

  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [course, setCourse] = useState("");

  const [editingId, setEditingId] = useState(null);

  // 2. Add and Update Student
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() ||  !rollNo.trim() || !course.trim()) {
      alert("Please fill all fields!");
      return;
    }

    if (editingId !== null) {

      // Update
      const updatedList = students.map((student) =>
        student.id === editingId
          ? { ...student, name, rollNo, course }
          : student
      );

      setStudents(updatedList);
      setEditingId(null);

    } else {

      // Add
      const newStudent = {
        id: Date.now(),
        name,
        rollNo,
        course
      };

      setStudents([...students, newStudent]);
    }

    setName("");
    setRollNo("");
    setCourse("");
  };

  // 3. Edit Student
  const handleEdit = (student) => {
    setName(student.name);
    setRollNo(student.rollNo);
    setCourse(student.course);
    setEditingId(student.id);
  };

  // 4. Delete Student
  const handleDelete = (id) => {
    const newList = students.filter(
      (student) => student.id !== id
    );

    setStudents(newList);

    if (editingId === id) {
      setEditingId(null);
      setName("");
      setRollNo("");
      setCourse("");
    }
  };

  // 5. Main UI
  return (
    <div style={{
      maxWidth: "700px",
      margin: "40px auto",
      padding: "20px",
      fontFamily: "Arial"
    }}>

      <h1 style={{ textAlign: "center" }}>
        Student Management System
      </h1>

      {/* Student Form */}
      <form onSubmit={handleSubmit}>

        <input
          style={inputStyle}
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={inputStyle}
          placeholder="Roll Number"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />

        <input
          style={inputStyle}
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button type="submit" style={buttonStyle}>
          {editingId !== null ? "Update Student" : "Add Student"}
        </button>

        {editingId !== null && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setName("");
              setRollNo("");
              setCourse("");
            }}
            style={{ ...buttonStyle, background: "gray" }}
          >
            Cancel
          </button>
        )}

      </form>

      {/* Student List */}
      <h2>Student List ({students.length})</h2>

      {students.map((student) => (
        <div key={student.id} style={cardStyle}>

          <div>
            <h3>{student.name}</h3>
            <p>Roll No: {student.rollNo}</p>
            <p>Course: {student.course}</p>
          </div>

          <div>
            <button
              onClick={() => handleEdit(student)}
              style={{ ...buttonStyle, background: "blue" }}
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(student.id)}
              style={{ ...buttonStyle, background: "red" }}
            >
              Delete
            </button>
          </div>

        </div>
      ))}

      {students.length === 0 && (
        <p style={{ textAlign: "center", color: "gray" }}>
          No students found!
        </p>
      )}

    </div>
  );
}

// Styles
const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "10px",
  boxSizing: "border-box",
  border: "1px solid #ccc",
  borderRadius: "5px"
};
const buttonStyle = {
  padding: "10px 15px",
  margin: "5px",
  background: "green",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

const cardStyle = {
  border: "1px solid #ccc",
  padding: "15px",
  marginBottom: "10px",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "10px"
};