import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ManageCompany(){

    const [users, setUsers] = useState([]);
    useEffect(() =>{
        getUsers();
    }, []);

    function getUsers() {
    axios.get('http://localhost/TriaRight-In/backend/createCompany.php/user/submit').then(function(response) {
        console.log(response.data);
        setUsers(response.data);
    });
}

const deleteRecord=(companyId)=>{
  const result = window.confirm("Are you sure you want to permanently delete this record?");
  if(result){
    
    axios.delete(`http://localhost/TriaRight-In/backend/createCompany.php/user/${companyId}/delete`).then(function(response) {
       console.log(response.data);
       getUsers();
    
  });
}
}

// const deleteCompany = (companyId) => {
//   axios.delete(`http://localhost/TriaRight-In/backend/createCompany.php/user/${companyId}/delete`).then(function(response) {
//        console.log(response.data);
//        getUsers();
//   });
// }

    return (
        <div className="manage-college-container">
            <h1>Manage Company</h1>
            <table>
                <thead>
                    <tr>
                        <th>Company Id</th>
                        <th>Company Name</th>
                        <th>Comnpany Email</th>
                        <th>Company phoneNo</th>
                        <th>company registrationType</th>
                        <th>Company Website</th>
                        <th>Industry</th>
                        <th>year Of Establishment</th>
                        <th>Sub-Business name</th>
                        <th>Do you have Gst</th>
                        <th>GST No</th>
                        <th>GST File</th>
                        <th>Do you have Company Pan</th>
                        <th>PAN No</th>
                        <th>Pan File</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>District</th>
                        <th>State</th>
                        <th>pincode</th>
                        <th>representative Name</th>
                        <th>Designation</th>
                        <th>representative PhoneNo</th>
                        <th>Personal Email</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {Array.isArray(users) ? (
  users.map((user, key) => (
    <tr key={key}>
      <td>{user.companyId}</td>
      <td>{user.companyName}</td>
      <td>{user.companyEmail}</td>
      <td>{user.companyPhNo}</td>
      <td>{user.companyRegType}</td>
      <td>{user.companyWebsite}</td>
      <td>{user.industry}</td>
      <td>{user.yearOfEstablishment}</td>
      <td>{user.subBusinessName}</td>
      {  (user.doYouHaveGst == 1)?
         <>
         <td>Yes</td>
         <td>{user.GSTno}</td>
         <td>{user.GSTfile}</td>
         </>
        :
        <>
        <td>No</td>
        <td>-</td>
         <td>-</td>
        </>
      }
      { (user.doYouHaveCompanyPan == 1)?
      <>
      <td>Yes</td>
         <td>{user.PANno}</td>
         <td>{user.PANfile}</td>
      </>
      :
      <>
      <td>No</td>
         <td>-</td>
         <td>-</td>
      </>
      }
      <td>{user.address}</td>
      <td>{user.city}</td>
      <td>{user.district}</td>
      <td>{user.state}</td>
      <td>{user.pincode}</td>
      <td>{user.representativeName}</td>
      <td>{user.designation}</td>
      <td>{user.representativePhoneNo}</td>
      <td>{user.personalEmail}</td>
      <td>{user.userName}</td>
      <td>{user.password}</td>
      <td className="button-container">
        <Link to={`/${user.companyId}/edit6`} style={{ marginRight: "10px" }}>
         <button>Edit</button>
        </Link>
        <button onClick={() => deleteRecord(user.companyId)}>Delete</button>
      </td>
    </tr>
  ))
) : (
  <p>No users to display</p> // or any other appropriate message or component
)}

                </tbody>
            </table>
        </div>
    )
}






































































































































































































































































































































































































































































































