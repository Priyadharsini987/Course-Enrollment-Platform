import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const courses = useSelector(state => state.courses.courses);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter ? course.category === filter : true)
  );

  const categories = [...new Set(courses.map(course => course.category))];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Course Dashboard</h1>

      <input
        type="text"
        placeholder="Search by course name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />

      <select onChange={e => setFilter(e.target.value)} style={{ padding: "5px" }}>
        <option value="">All Categories</option>
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>{cat}</option>
        ))}
      </select>

      <div style={{ marginTop: "20px" }}>
        {filteredCourses.map(course => (
          <div key={course.id} style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            backgroundColor: course.status === "Enrolled" ? "#d4edda" : "#cce5ff"
          }}>
            <h3>{course.title}</h3>
            <p>Instructor: {course.instructor}</p>
            <p>Duration: {course.duration}</p>
            <p>Category: {course.category}</p>
            <p>Status: {course.status}</p>
            <Link to={`/course/${course.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
