import React from "react";
import SideNav from "./SideNav";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CreateStream from "./CreateStream";
import ManageStream from "./ManageStream";
import EditStream from "./EditStream";
import ManageCourse from "./ManageCourse";
import CreateCourse from "./CreateCourse";
import EditCourse from "./EditCourse";
import CreateTrainer from "./CreateTrainer";
import ManageTrainer from "./ManageTrainer";
import EditTrainer from "./EditTrainer";
import CreateCollege from "./CreateCollege";
import ManageCollege from "./ManageCollege";
import EditCollege from "./EditCollege";
import CreateBatch from "./CreateBatch";
import ManageBatch from "./ManageBatch";
import EditBatch from "./EditBatch";
import CreateCompany from "./CreateCompany";
import ManageCompany from "./ManageCompany";
import EditCompany from "./EditCompany";
import CreateTriarightLogin from "./CreateTriarightLogin";
import ManageTriarightLogin from "./ManageTriarightLogin";
import EditTriarightLogin from "./EditTriarightLogin";
import CreateStudentPersonalForm from "./CreateStudentPersonalForm";
import Example from "./example";

const SuperAdmin=()=>{
return(
<div className="super">
    <BrowserRouter>
 <SideNav/>
   {/* <nav>
          <ul>
             <li>
              <Link to ="/manage-stream"></Link>
            </li>  
             <li>
              <Link to = "/create-stream"></Link>
            </li>  
           <li>
              <Link to = "/stream/:streamId/edit"></Link>
            </li> 
          </ul>
        </nav>     */}
    <Routes>
      
    {/* <Route  index element={<ManageStream />} /> */}
        <Route path="/create-stream" element={<CreateStream />}></Route>
        <Route path="/manage-stream" element={<ManageStream />}></Route> 
        <Route path="/:streamId/edit1" element={<EditStream />}></Route>

        <Route path="/create-course" element={<CreateCourse />}></Route>
        <Route path="/manage-course" element={<ManageCourse />}></Route> 
        <Route path="/:courseId/edit2" element={<EditCourse />}></Route>

        <Route path="/create-trainer" element={<CreateTrainer />}></Route>
        <Route path="/manage-trainer" element={<ManageTrainer />}></Route>
        <Route path="/:trainerId/edit3" element={<EditTrainer />}></Route>

        <Route path="/create-college" element={<CreateCollege />}></Route>
        <Route path="/manage-college" element={<ManageCollege />}></Route>
        <Route path="/:collegeId/edit4" element={<EditCollege />}></Route>

        <Route path="/create-batch" element={<CreateBatch />}></Route>
        <Route path="/manage-batch" element={<ManageBatch />}></Route>
        <Route path="/:batchId/edit5" element={<EditBatch />}></Route>

        <Route path="/create-company" element={<CreateCompany />}></Route>
        <Route path="/manage-company" element={<ManageCompany />}></Route>
        <Route path="/:companyId/edit6" element={<EditCompany />}></Route>

        <Route path="/create-triarightlogin" element={<CreateTriarightLogin/>}></Route>
        <Route path="/manage-triarightlogin" element={<ManageTriarightLogin />}></Route>
        <Route path="/:triarightLoginId/edit7" element={<EditTriarightLogin />}></Route>

        <Route path="/create-studentpersonalform" element={<CreateStudentPersonalForm/>}></Route>
        <Route path="/create-example" element={<Example />}></Route>
    </Routes>
 
    </BrowserRouter>
   
</div>


)
}

export default SuperAdmin