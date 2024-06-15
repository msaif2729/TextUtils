// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'



function App() {

  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);
  const [mystyle,setMyStyle] = useState({
    backgroundColor: 'white',
    color:'#2a2f34',
    border : '1px solid #2a2f34'
});

  const showAlert = (mssg,type)=>{
    setAlert({
      mssg:mssg,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const togglemode = ()=>{
    if(mode==="light")
      {
        setMode("dark");
        document.body.style.backgroundColor = "#2a2f34";
        document.body.style.color = "white";
        showAlert("Dark Mode Enables","success")
        setMyStyle({
          backgroundColor: '#2a2f34',
          color:'white',
          border : '1px solid white'
        });
      }
      else{
        setMode("light");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "#2a2f34";
        showAlert("Light Mode Enables","success");
        setMyStyle({
          backgroundColor: 'white',
          color:'#2a2f34',
          border : '1px solid #2a2f34'
        });
      }
  }



  return (
    
    <Router>
      <div >
        <Navbar title="TextUtils" homeText="Home" aboutText="About" mode={mode} toggle={togglemode} />
        <div className="container my-3">
          <Alert alert={alert} />
        </div>
        <Routes>
          <Route exact path="/" element={<TextForm head="Enter the text to analyze below" showAlert={showAlert} />} />
          <Route exact path="/about" element={ <About head="About TextUtils" mystyle={mystyle} />} />
        </Routes>
      </div>
    </Router>
      
  );
}


export default App;
