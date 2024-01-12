import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
import Signup from '../src/Components/signup/signup.jsx';

import Landing from './Components/LandingPage/Landing.js';
// import Temp from './Components/templates-page/temppage.jsx'
import Tempedit from './Components/tempedit/tempedit.jsx';
import Temp from './Components/templates-page/temppage.jsx'
import PlatformfeedbackForm from './Components/PlatfromFeedback/PlatformfeedbackForm.js';
import Navbar from "./Components/topbar/topbar.js"
import ResetPasswordPage from './Components/resetpassword/resetpassword.js'

import Infosys from './Components/customised_resumes/infosys.jsx';
import Intel from './Components/customised_resumes/intel.jsx';
import background from './Components/images/background.png'
import ChangePasswordPage from './Components/passwordChange/changepassword.js'
import ResetPasswordEmail from './Components/resetpassword/resetpasswordEmail'
import Footer1 from './Components/footer/footer1.js'

import ForgotPasswordPage from './Components/forgotpassword/forgotpassword.js'

function App() {

  return (
    <>
<Router>
      <Routes>
        <Route path="/" element= {<Landing/>} />
        <Route path="/editresume" element ={<Temp/>}/>


        
        <Route path="/signup" element = {<Signup/>} />
        {/* <Route path="/login" element = {<Login/>} /> */}
        <Route path="/tempedit" element= {<Tempedit/>} />
        
        <Route path="/footer1" element ={<Footer1/>}/>
        <Route path="/feedback" element ={<PlatformfeedbackForm/>}/>
        <Route path="/navbar" elememt = {<Navbar/>}/>
        <Route path= "/infosys" element = {<Infosys/>}/>
        <Route path= "/intel" element = {<Intel/>}/>
        <Route path= "/changePasswordPage" element = {<ChangePasswordPage/>}/>
        <Route path= "/resetpasswordemail" element = {<ResetPasswordEmail/>}/>
        <Route path= "/resetpasswordpage" element = {<ResetPasswordPage/>}/>
        <Route path= "/forgotpasswordpage" element = {<ForgotPasswordPage/>}/>
        <Route path= "/resetpasswordemail" element = {<ResetPasswordEmail/>}/>
        


        
      </Routes>
    </Router>
    </>
  )
}

export default App;
