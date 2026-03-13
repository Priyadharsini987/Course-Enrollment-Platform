import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { enrollStudent, unenrollStudent } from "./redux/courseSlice";

const CourseDetails = () => {
  const { id } = useParams();
  const course = useSelector(state =>
    state.courses.courses.find(c => c.id === parseInt(id))
  );
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  if (!course) return <p>Course not found!</p>;

  const handleEnroll = () => {
    dispatch(enrollStudent(course.id));
    setMessage("You have successfully enrolled in this course!");
  };

  const handleUnenroll = () => {
    dispatch(unenrollStudent(course.id));
    setMessage("You have unenrolled from this course!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{course.title}</h1>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Category:</strong> {course.category}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Prerequisites:</strong> {course.prerequisites}</p>
      <p><strong>Topics Covered:</strong> {course.topics.join(", ")}</p>
      <p><strong>Status:</strong> {course.status}</p>

      {course.status === "Available" ? (
        <button onClick={handleEnroll} style={{ marginRight: "10px" }}>Enroll</button>
      ) : (
        <button onClick={handleUnenroll}>Unenroll</button>
      )}

      {message && <p style={{ color: "green", marginTop: "10px" }}>{message}</p>}
    </div>
  );
};

export default CourseDetails;
