import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
import Signup from '../src/Components/signinpage/signup.jsx';
import Login from './Components/signinpage/login.jsx';
import Mainpage from './Components/mainpage/mainpage.js';
// import Temp from './Components/templates-page/temppage.jsx'
import Tempedit from './Components/tempedit/tempedit.jsx';
import Temp from './Components/templates-page/temppage.jsx'
import PlatformfeedbackForm from './Components/PlatfromFeedback/PlatformfeedbackForm.js';
import Navbar from "./Components/topbar/navbar.js"
// import Thpage from "./Components/4thpage/4thpage.js"
import Infosys from './Components/customised_resumes/infosys.jsx';
import Intel from './Components/customised_resumes/intel.jsx';
import Thpage from './Components/fouthpg/fourthpg.js'
import background from './Components/images/background.png'
import ChangePasswordPage from './Components/passwordChange/changepassword.js'
import Changepassword from './Components/changepassword/changepassword1.jsx'

function App() {

  return (
    <>
<Router>
      <Routes>
        <Route path="/signup" element = {<Signup/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/" element= {<Mainpage/>} />
        <Route path="/tempedit" element= {<Tempedit/>} />
        <Route path="/temppage" element ={<Temp/>}/>
        <Route path="/feedback" element ={<PlatformfeedbackForm/>}/>
        <Route path="/navbar" elememt = {<Navbar/>}/>
        <Route path= "/thpage" element = {<Thpage/>}/>
        <Route path= "/infosys" element = {<Infosys/>}/>
        <Route path= "/intel" element = {<Intel/>}/>
        <Route path= "/changePasswordPage" element = {<ChangePasswordPage/>}/>
        <Route path= "/changepassword" element = {<Changepassword/>}/>
        
      </Routes>
    </Router>
    </>
  )
}

export default App;
