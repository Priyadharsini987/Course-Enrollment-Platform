import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { enrollStudent } from "./redux/courseSlice";

const EnrollmentForm = () => {
  const courses = useSelector(state => state.courses.courses);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    courseId: "",
    date: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Name is required";
    if (!formData.email || !formData.email.includes("@")) errs.email = "Valid email required";
    if (!formData.courseId) errs.courseId = "Select a course";
    if (!formData.date) errs.date = "Select enrollment date";
    else if (new Date(formData.date) < new Date().setHours(0,0,0,0))
      errs.date = "Date cannot be in the past";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      dispatch(enrollStudent(parseInt(formData.courseId)));
      setSuccess("Enrollment successful!");
      setFormData({ name: "", email: "", courseId: "", date: "" });
      setErrors({});
    } else {
      setErrors(errs);
      setSuccess("");
    }
  };

 return (
    <div style={{ padding: "20px" }}>
      <h1>Enrollment Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br/>
          <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
          {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
        </div>

        <div>
          <label>Email:</label><br/>
          <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
          {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
        </div>

        <div>
          <label>Select Course:</label><br/>
          <select value={formData.courseId} onChange={e => setFormData({...formData, courseId: e.target.value})}>
            <option value="">--Select--</option>
            {courses.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
          </select>
          {errors.courseId && <p style={{color:"red"}}>{errors.courseId}</p>}
        </div>

        <div>
          <label>Enrollment Date:</label><br/>
          <input type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
          {errors.date && <p style={{color:"red"}}>{errors.date}</p>}
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>Enroll</button>
      </form>

      {success && <p style={{color:"green", marginTop:"10px"}}>{success}</p>}
    </div>
  );
};

export default EnrollmentForm;