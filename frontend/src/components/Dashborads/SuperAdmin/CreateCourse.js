import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    image:null,
    stream: "IT",
    duration: "",
    provider: "",
    type: "online",
    hours: "",
    courseDescription: "",
    topicsCovered: "",
    benefits: "",
    price: "",
  });
  const Navigate = useNavigate();   

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === 'file') {
      setCourseData({ ...courseData, [name]: event.target.files[0] });
    } else {
      setCourseData({ ...courseData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('image', courseData.image); // Append the image file
    formData.append('stream', courseData.stream);
    formData.append('duration', courseData.duration);
    formData.append('provider', courseData.provider);
    formData.append('type', courseData.type);
    formData.append('hours', courseData.hours);
    formData.append('courseDescription', courseData.courseDescription);
    formData.append('topicsCovered', courseData.topicsCovered);
    formData.append('benefits', courseData.benefits);
    formData.append('price', courseData.price);
  
    axios.post('http://localhost/TriaRight-In/backend/createCourse.php/user/submit', formData)
      .then(function(response){
        if (response.data.status === 1) {
          alert('Success: ' + response.data.message);
          Navigate('/manage-course');
        } else {
          alert('Error: ' + response.data.message);
        }
      })
      .catch(function (error) {
        console.error(error);
        alert('An error occurred while creating the record.');
      });
  }
  

  return (
    <div className="create-course-container">
      <h2>Create Course</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
            required
            accept="image/*"
            //value={courseData.image}
          />
        </div>
        <div className="form-group">
          <label htmlFor="stream">Stream:</label>
          <select
            name="stream"
            id="stream"
            value={courseData.stream}
            required
            onChange={handleChange}
          >
            <option value="It">IT</option>
            <option value="Non-IT">Non-IT</option>
            <option value="pharmacy">Pharmacy</option>
            <option value="management">Management</option>
            <option value="finance">Finance</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration (in months):</label>
          <input
            type="number"
            name="duration"
            id="duration"
            value={courseData.duration}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="provider">Provider:</label>
          <input
            type="text"
            name="provider"
            id="provider"
            value={courseData.provider}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select
            name="type"
            id="type"
            value={courseData.type}
            required
            onChange={handleChange}
          >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="hours">Hours:</label>
          <input
            type="number"
            name="hours"
            id="hours"
            value={courseData.hours}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseDescription">Course Description:</label>
          <textarea
            name="courseDescription"
            id="courseDescription"
            value={courseData.courseDescription}
            required
            onChange={handleChange}
            rows={4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="topicsCovered">Topics Covered:</label>
          <textarea
            name="topicsCovered"
            id="topicsCovered"
            value={courseData.topicsCovered}
            required
            onChange={handleChange}
            rows={4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="benefits">Benefits:</label>
          <textarea
            name="benefits"
            id="benefits"
            value={courseData.benefits}
            required
            onChange={handleChange}
            rows={4}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price (optional):</label>
          <input
            type="number"
            name="price"
            id="price"
            value={courseData.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateCourse;

