import './App.css';
import Navbar from "./components/Navbar";
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode is enabled', 'success');
      document.title = 'TextUtil-Dark';
      setTimeout(() => {
        document.title = 'TextUtil';
      }, 2000);
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled', 'success');
      document.title = 'TextUtil-Light';
      setTimeout(() => {
        document.title = 'TextUtil';
      }, 2000);
      // setInterval(() => {
      //   document.title= 'red' ;
      // }, 1500);
      // setInterval(() => {
      //   document.title= 'green' ;
      // }, 2000);
    }
  }
  const [alert, setalert] = useState(null)
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  return (
    // <>
    //   <Navbar title="Title enter" link="About" mode={mode} tmode={togglemode} />
    //   <Alert alert={alert} />
    //   <div className='container'>
    //     <Textform title="Write in this text box to perform any action on it:" mode={mode} />
       
    //   </div>
    // </>
    <Router>
      <Navbar title="Title enter" link="About" mode={mode} tmode={togglemode} />
      <Alert alert={alert} />
      <div className='container'>
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<Textform title="Write in this text box to perform any action on it:" mode={mode}/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
