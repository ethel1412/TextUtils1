import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React from "react";
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";*/

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
        msg : message,
        type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2B4C61';
      showAlert("Dark mode enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled","success");
    }
  }
  return (
  <>
  {/*<Router>*/}
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About"/>
   <Alert alert={alert}/>
  <div className="container my-3">
    {/*<Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
  <Route path="/" element={<Textform heading="Enter text below" mode={mode} showAlert={showAlert}/>}/>*/}

    <Textform heading="Enter text below" mode={mode} showAlert={showAlert}/>
          
    {/*</Routes>*/}
   </div>
   {/*</Router>*/}
  </>
  );
  }
export default App;
