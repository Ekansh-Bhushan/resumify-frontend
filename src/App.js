
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
import Signup from '../src/Components/signinpage/signup.jsx';
import Login from './Components/signinpage/login.jsx';
import Mainpage from './Components/mainpage/mainpage.js';
// import Temp from './Components/templates-page/temppage.jsx'
import Tempedit from './Components/tempedit/tempedit.jsx';
function App() {
  return (
    <>
<Router>
      <Routes>
        <Route path="/signup" element = {<Signup/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/" element= {<Mainpage/>} />
        <Route path="/tempedit" element= {<Tempedit/>} />
        {/* <Route path="/template" element ={<Temp/>}/> */}
      </Routes>
    </Router>
    </>
  )
}

export default App;
