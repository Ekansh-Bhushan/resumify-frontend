
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
      </Routes>
    </Router>
    </>
  )
}

export default App;
