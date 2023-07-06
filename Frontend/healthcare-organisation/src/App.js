import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Docregister from './Components/Docregister';
import Patientregister from './Components/Patientregister';
import Login from './Components/Login';
import Home from './Components/Home';
import PatientLandingPage from './Components/Patientlanding';
import AdminLandingPage from './Components/AdminLandingPage';
import DoctorLandingPage from './Components/DocLandingPage';
import PatientViewDoctors from './Components/Viewdoctors';
import AdminViewDoctors from './Components/AdminViewDoctors';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
    
    <div>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='docReg' element={<Docregister/>}/>
        <Route path='patientReg' element={<Patientregister/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="AdminHome" element={<AdminLandingPage/>}/>
        <Route path="DocHome" element={<DoctorLandingPage/>}/>
        <Route path='PatientHome' element={<PatientLandingPage/>}/>
        <Route path='adManageDoc' element={<AdminViewDoctors/>}/>
        <Route path="viewDoc" element={<PatientViewDoctors/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
