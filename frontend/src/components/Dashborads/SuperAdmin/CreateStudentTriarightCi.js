import React, { useState } from "react";


const StudentTriarightEssentialsCi = () => {
  const [triarightEssentialsCi, setTriarightEssentialsCi] = useState({
    userName: "",
    password : "",
    confirmPassword: "",
    accountType:"",
    paymentType:"",
    
});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTriarightEssentialsCi({...triarightEssentialsCi, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (triarightEssentialsCi.password !== triarightEssentialsCi.confirmPassword) {
        alert("Password and Confirm Password do not match");
        return;
      }
    console.log(triarightEssentialsCi.data); // You can perform your submit logic here
  };

  return (
    <div className="create-student-container">
      <h2>Triaright Essentials</h2>
      <form onSubmit={handleSubmit}>
      
       
        <div className="form-group">
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={triarightEssentialsCi.userName}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={triarightEssentialsCi.password}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
           <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={triarightEssentialsCi.confirmPassword}
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="accountType"> Account Type:</label>
          <select
            name="accountType"
            id="accountType"
            value={triarightEssentialsCi.accountType}
            required
            onChange={handleChange}
          > <option value="">Select</option>
            <option value="individual">Individual</option>
            <option value="college">College</option>
            </select>
        </div>
        <div className="form-group">
          <label htmlFor="paymentType"> Payment Type:</label>
          <select
            name="paymentType"
            id="paymentType"
            value={triarightEssentialsCi.paymentType}
            required
            onChange={handleChange}
          > <option value="">Select</option>
            <option value="individual">Individual</option>
            <option value="college">College</option>
            </select>
        </div>
    
        
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentTriarightEssentialsCi;