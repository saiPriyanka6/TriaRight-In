import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function CreateTriarightLogin(){

  const [triarightEssentialsData, setTriarightEssentials] = useState({
    userName: "",
    password : "",
    confirmPassword: "",
    registerAs: ""
    

});

  const Navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTriarightEssentials({...triarightEssentialsData, [name]: value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (triarightEssentialsData.password !== triarightEssentialsData.confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }
    
    axios.post('http://localhost/TriarightWeb/createTriarightLoginform.php/user/Submit', triarightEssentialsData).then(function(response){
    console.log(response.data); // You can perform your submit logic here
    Navigate('/manage-triarightlogin');
  });

  }
  return (
    <div className="create-student-container">
      <h2>Triaright Essentials</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="registerAs">Register As:</label>
          <select
            id="registerAs"
            name="registerAs"
            value={triarightEssentialsData.registerAs}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select</option>
            <option value="trainer">Trainer</option>
            <option value="college">College</option>
            <option value="collageMentor">Collage Mentor</option>
            <option value="student">Student</option>
            <option value="company">Company</option>
            <option value="consultant">Consultant</option>
          </select>
        </div>
       
        <div className="form-group">
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={triarightEssentialsData.userName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={triarightEssentialsData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
           <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={triarightEssentialsData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateTriarightLogin;