
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react';

function App() {
  const [mode,setmode]=useState("light");

  const togglemode=()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor="darkslategrey";
      document.body.style.color="#61dafb";
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="#61dafb";
      document.body.style.color="darkslategrey";
    }
  }
  return (
    <div>
      <Navbar title="TextDose" mode={mode} togglemode={togglemode}/>
      <div className="container">
        <TextArea textarea="Enter your text" />
      </div>
      {/* <About /> */}
    </div>
  );
}


export default App;
