import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
import Signup from '../src/Components/signinpage/signup.jsx';
import Login from './Components/signinpage/login.jsx';
import Mainpage from './Components/mainpage/mainpage.js';
import Temp from './Components/templates-page/temppage.jsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element = {<Signup/>} />
          <Route path="/login" element = {<Login/>} />
          <Route path="/" element= {<Mainpage/>} />
          <Route path="/template" element ={<Temp/>}/>
        </Routes>
      </Router>
      {/* <temp/> */}
    </>
  )
}

export default App;
